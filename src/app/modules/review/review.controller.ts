import { NextFunction, Response } from 'express';
import { sendResponse } from '../../helper/responseHelper';
import { AuthenticatedRequest } from '../../types';
import { ReviewService } from './review.service';

const createReview = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const reviewerId = req.user?.id as string;
    const result = await ReviewService.createReview(reviewerId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'Review created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const reviewerId = req.user?.id as string;
    const result = await ReviewService.updateReview(id, reviewerId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Review updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const reviewerId = req.user?.id as string;
    await ReviewService.deleteReview(id, reviewerId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const getUserReviews = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const result = await ReviewService.getUserReviews(userId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User reviews retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ReviewController = {
  createReview,
  updateReview,
  deleteReview,
  getUserReviews,
};