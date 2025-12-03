import express from 'express';
import { auth } from '../../middleware/auth';
import { validateRequest } from '../../middleware/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidation } from './review.validation';
import { Router } from "express";

const router = express.Router();

router.post(
  '/',
  auth('USER', 'ADMIN'),
  validateRequest(ReviewValidation.createReviewValidation),
  ReviewController.createReview
);

router.patch(
  '/:id',
  auth('USER', 'ADMIN'),
  validateRequest(ReviewValidation.updateReviewValidation),
  ReviewController.updateReview
);

router.delete('/:id', auth('USER', 'ADMIN'), ReviewController.deleteReview);

router.get('/user/:userId', ReviewController.getUserReviews);

export const ReviewRoutes: Router = router;