import Stripe from 'stripe';
import config from '../../../config';
import AppError from '../../error/AppError';
import prisma from '../../shared/prisma';
import { ICreateSubscription, ISubscriptionResponse } from './payment.interface';
import { SUBSCRIPTION_DURATION, SUBSCRIPTION_PRICES } from './payment.constant';

const stripe = new Stripe(config.stripe.secret_key as string);

const createSubscription = async (userId: string, payload: ICreateSubscription): Promise<ISubscriptionResponse> => {
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

  const session = await stripe.checkout.sessions.create({
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
    success_url: `${config.frontend_url}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.frontend_url}/payment/cancel`,
    metadata: {
      userId,
      subscriptionType: type,
    },
  });

  const subscription = await prisma.subscription.create({
    data: {
      userId,
      stripeSessionId: session.id,
      amount: price,
      type,
      status: 'pending',
    },
  });

  return {
    id: subscription.id,
    sessionId: session.id,
    url: session.url as string,
  };
};

const handleWebhook = async (event: any): Promise<void> => {
  switch (event.type) {
    case 'checkout.session.completed':
      await handleSuccessfulPayment(event.data.object);
      break;
    case 'checkout.session.expired':
      await handleFailedPayment(event.data.object);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
};

const handleSuccessfulPayment = async (session: any): Promise<void> => {
  const subscription = await prisma.subscription.findUnique({
    where: { stripeSessionId: session.id },
  });

  if (!subscription) {
    throw new AppError(404, 'Subscription not found');
  }

  const duration = SUBSCRIPTION_DURATION[subscription.type];
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + duration);

  await prisma.subscription.update({
    where: { id: subscription.id },
    data: {
      status: 'active',
      startDate,
      endDate,
    },
  });

  await prisma.user.update({
    where: { id: subscription.userId },
    data: {
      isSubscribed: true,
      subscriptionType: subscription.type,
      subscriptionExpiry: endDate,
      isVerified: true,
    },
  });
};

const handleFailedPayment = async (session: any): Promise<void> => {
  await prisma.subscription.updateMany({
    where: { stripeSessionId: session.id },
    data: { status: 'failed' },
  });
};

const getUserSubscriptions = async (userId: string) => {
  const subscriptions = await prisma.subscription.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return subscriptions;
};

export const PaymentService = {
  createSubscription,
  handleWebhook,
  getUserSubscriptions,
};