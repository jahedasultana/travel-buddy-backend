import AppError from '../../error/AppError';
import prisma from '../../shared/prisma';
import { ICreateReview, IReviewResponse, IUpdateReview } from './review.interface';

const createReview = async (reviewerId: string, payload: ICreateReview): Promise<IReviewResponse> => {
  const { revieweeId, rating, comment } = payload;

  if (reviewerId === revieweeId) {
    throw new AppError(400, 'You cannot review yourself');
  }

  const existingReview = await prisma.review.findUnique({
    where: {
      reviewerId_revieweeId: {
        reviewerId,
        revieweeId,
      },
    },
  });

  if (existingReview) {
    throw new AppError(400, 'You have already reviewed this user');
  }

  const review = await prisma.review.create({
    data: {
      reviewerId,
      revieweeId,
      rating,
      comment,
    },
    include: {
      reviewer: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
        },
      },
      reviewee: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
        },
      },
    },
  });

  // Update reviewee's average rating
  await updateUserRating(revieweeId);

  return review;
};

const updateReview = async (id: string, reviewerId: string, payload: IUpdateReview): Promise<IReviewResponse> => {
  const review = await prisma.review.findUnique({
    where: { id },
  });

  if (!review) {
    throw new AppError(404, 'Review not found');
  }

  if (review.reviewerId !== reviewerId) {
    throw new AppError(403, 'You can only update your own reviews');
  }

  const updatedReview = await prisma.review.update({
    where: { id },
    data: payload,
    include: {
      reviewer: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
        },
      },
      reviewee: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
        },
      },
    },
  });

  // Update reviewee's average rating
  await updateUserRating(review.revieweeId);

  return updatedReview;
};

const deleteReview = async (id: string, reviewerId: string): Promise<void> => {
  const review = await prisma.review.findUnique({
    where: { id },
  });

  if (!review) {
    throw new AppError(404, 'Review not found');
  }

  if (review.reviewerId !== reviewerId) {
    throw new AppError(403, 'You can only delete your own reviews');
  }

  await prisma.review.delete({
    where: { id },
  });

  // Update reviewee's average rating
  await updateUserRating(review.revieweeId);
};

const getUserReviews = async (userId: string) => {
  const reviews = await prisma.review.findMany({
    where: { revieweeId: userId },
    include: {
      reviewer: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return reviews;
};

const updateUserRating = async (userId: string): Promise<void> => {
  const reviews = await prisma.review.findMany({
    where: { revieweeId: userId },
  });

  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews 
    : 0;

  await prisma.user.update({
    where: { id: userId },
    data: {
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews,
    },
  });
};

export const ReviewService = {
  createReview,
  updateReview,
  deleteReview,
  getUserReviews,
};