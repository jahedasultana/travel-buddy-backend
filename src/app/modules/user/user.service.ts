import AppError from '../../error/AppError';
import prisma from '../../shared/prisma';
import { IUpdateUser, IUserProfile } from './user.interface';

const getUserProfile = async (id: string): Promise<IUserProfile> => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      fullName: true,
      profileImage: true,
      bio: true,
      currentLocation: true,
      visitedCountries: true,
      travelInterests: true,
      role: true,
      isSubscribed: true,
      isVerified: true,
      averageRating: true,
      totalReviews: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  return user;
};

const updateUserProfile = async (id: string, payload: IUpdateUser): Promise<IUserProfile> => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: payload,
    select: {
      id: true,
      email: true,
      fullName: true,
      profileImage: true,
      bio: true,
      currentLocation: true,
      visitedCountries: true,
      travelInterests: true,
      role: true,
      isSubscribed: true,
      isVerified: true,
      averageRating: true,
      totalReviews: true,
      createdAt: true,
    },
  });

  return updatedUser;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      fullName: true,
      profileImage: true,
      currentLocation: true,
      travelInterests: true,
      isVerified: true,
      averageRating: true,
      totalReviews: true,
    },
  });

  return users;
};

export const UserService = {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
};