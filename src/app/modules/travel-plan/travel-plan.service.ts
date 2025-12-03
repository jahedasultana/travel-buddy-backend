import AppError from '../../error/AppError';
import prisma from '../../shared/prisma';
import { ICreateTravelPlan, ITravelPlanResponse, IUpdateTravelPlan } from './travel-plan.interface';

const createTravelPlan = async (userId: string, payload: ICreateTravelPlan): Promise<ITravelPlanResponse> => {
  const travelPlan = await prisma.travelPlan.create({
    data: {
      ...payload,
      startDate: new Date(payload.startDate),
      endDate: new Date(payload.endDate),
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
          isVerified: true,
        },
      },
    },
  });

  return travelPlan;
};

const getAllTravelPlans = async () => {
  const travelPlans = await prisma.travelPlan.findMany({
    where: { isActive: true },
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
          isVerified: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return travelPlans;
};

const getTravelPlanById = async (id: string): Promise<ITravelPlanResponse> => {
  const travelPlan = await prisma.travelPlan.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
          isVerified: true,
        },
      },
    },
  });

  if (!travelPlan) {
    throw new AppError(404, 'Travel plan not found');
  }

  return travelPlan;
};

const updateTravelPlan = async (id: string, userId: string, payload: IUpdateTravelPlan): Promise<ITravelPlanResponse> => {
  const travelPlan = await prisma.travelPlan.findUnique({
    where: { id },
  });

  if (!travelPlan) {
    throw new AppError(404, 'Travel plan not found');
  }

  if (travelPlan.userId !== userId) {
    throw new AppError(403, 'You can only update your own travel plans');
  }

  const updateData: any = { ...payload };
  if (payload.startDate) updateData.startDate = new Date(payload.startDate);
  if (payload.endDate) updateData.endDate = new Date(payload.endDate);

  const updatedTravelPlan = await prisma.travelPlan.update({
    where: { id },
    data: updateData,
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
          isVerified: true,
        },
      },
    },
  });

  return updatedTravelPlan;
};

const deleteTravelPlan = async (id: string, userId: string): Promise<void> => {
  const travelPlan = await prisma.travelPlan.findUnique({
    where: { id },
  });

  if (!travelPlan) {
    throw new AppError(404, 'Travel plan not found');
  }

  if (travelPlan.userId !== userId) {
    throw new AppError(403, 'You can only delete your own travel plans');
  }

  await prisma.travelPlan.delete({
    where: { id },
  });
};

const searchTravelPlans = async (destination?: string, startDate?: string, travelType?: string) => {
  const whereClause: any = { isActive: true };

  if (destination) {
    whereClause.destination = {
      contains: destination,
      mode: 'insensitive',
    };
  }

  if (startDate) {
    whereClause.startDate = {
      gte: new Date(startDate),
    };
  }

  if (travelType) {
    whereClause.travelType = travelType;
  }

  const travelPlans = await prisma.travelPlan.findMany({
    where: whereClause,
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
          isVerified: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return travelPlans;
};

export const TravelPlanService = {
  createTravelPlan,
  getAllTravelPlans,
  getTravelPlanById,
  updateTravelPlan,
  deleteTravelPlan,
  searchTravelPlans,
};