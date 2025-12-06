import Stripe from 'stripe';
import config from '../../../config';
import AppError from '../../error/AppError';
import prisma from '../../shared/prisma';
import { ICreateSubscription, ISubscriptionResponse } from './payment.interface';
import { SUBSCRIPTION_DURATION, SUBSCRIPTION_PRICES } from './payment.constant';

const stripe = new Stripe(config.stripe.secret_key as string);

const createPayment = async (userId: string, payload: ICreateSubscription) => {
  const { type } = payload;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  if (user.isSubscribed) {
    throw new AppError(400, 'User already has an active subscription');
  }

  const price = SUBSCRIPTION_PRICES[type];
  let session;

  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Travel Buddy ${type} Subscription`,
              description: `${type} subscription to Travel Buddy platform`,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${config.frontend_url}/payment/success`,
      cancel_url: `${config.frontend_url}/payment/cancel`,
      metadata: {
        userId,
        subscriptionType: type,
      },
    });

    await prisma.subscription.create({
      data: {
        userId,
        stripeSessionId: session.id,
        amount: price,
        type,
        status: 'pending',
      },
    });

    return { sessionId: session.id, url: session.url };
  } catch (error) {
    if (session?.id) {
      await stripe.checkout.sessions.expire(session.id);
    }
    throw error;
  }
};

const confirmPayment = async (sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== 'paid') {
    throw new AppError(400, 'Payment not completed');
  }

  const subscription = await prisma.subscription.findUnique({
    where: { stripeSessionId: sessionId },
  });

  if (!subscription) {
    throw new AppError(404, 'Subscription not found');
  }

  const duration = SUBSCRIPTION_DURATION[subscription.type];
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + duration);

  await prisma.$transaction(async (tx) => {
    await tx.subscription.update({
      where: { id: subscription.id },
      data: {
        status: 'active',
        startDate,
        endDate,
      },
    });

    await tx.user.update({
      where: { id: subscription.userId },
      data: {
        isSubscribed: true,
        subscriptionType: subscription.type,
        subscriptionExpiry: endDate,
        isVerified: true,
      },
    });
  });

  return { message: 'Payment confirmed successfully' };
};

export const PaymentService = {
  createPayment,
  confirmPayment,
};