import { NextFunction, Response } from 'express';
import { sendResponse } from '../../helper/responseHelper';
import { AuthenticatedRequest } from '../../types';
import { TravelPlanService } from './travel-plan.service';

const createTravelPlan = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id as string;
    const result = await TravelPlanService.createTravelPlan(userId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'Travel plan created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTravelPlans = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const result = await TravelPlanService.getAllTravelPlans();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Travel plans retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTravelPlanById = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await TravelPlanService.getTravelPlanById(id);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Travel plan retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateTravelPlan = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id as string;
    const result = await TravelPlanService.updateTravelPlan(id, userId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Travel plan updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTravelPlan = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id as string;
    await TravelPlanService.deleteTravelPlan(id, userId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Travel plan deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const searchTravelPlans = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { destination, startDate, travelType } = req.query;
    const result = await TravelPlanService.searchTravelPlans(
      destination as string,
      startDate as string,
      travelType as string
    );

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Travel plans searched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const TravelPlanController = {
  createTravelPlan,
  getAllTravelPlans,
  getTravelPlanById,
  updateTravelPlan,
  deleteTravelPlan,
  searchTravelPlans,
};