import { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../helper/responseHelper';
import { AuthenticatedRequest } from '../../types';
import { PaymentService } from './payment.service';

const createPayment = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id as string;
    const result = await PaymentService.createPayment(userId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'Payment created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const confirmPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { sessionId } = req.body;
    const result = await PaymentService.confirmPayment(sessionId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Payment confirmed successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PaymentController = {
  createPayment,
  confirmPayment,
};