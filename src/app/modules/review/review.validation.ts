import { z } from 'zod';

const createReviewValidation = z.object({
  body: z.object({
    revieweeId: z.string().min(1, 'Reviewee ID is required'),
    rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
    comment: z.string().max(500).optional(),
  }),
});

const updateReviewValidation = z.object({
  body: z.object({
    rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5').optional(),
    comment: z.string().max(500).optional(),
  }),
});

export const ReviewValidation = {
  createReviewValidation,
  updateReviewValidation,
};