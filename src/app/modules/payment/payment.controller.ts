import { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../helper/responseHelper';
import { AuthenticatedRequest } from '../../types';
import { PaymentService } from './payment.service';

const createSubscription = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id as string;
    const result = await PaymentService.createSubscription(userId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'Subscription created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const handleWebhook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const event = req.body;
    await PaymentService.handleWebhook(event);

    res.status(200).json({ received: true });
  } catch (error) {
    next(error);
  }
};

const getUserSubscriptions = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id as string;
    const result = await PaymentService.getUserSubscriptions(userId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User subscriptions retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PaymentController = {
  createSubscription,
  handleWebhook,
  getUserSubscriptions,
};