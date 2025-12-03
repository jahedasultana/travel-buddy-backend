import express from 'express';
import { auth } from '../../middleware/auth';
import { validateRequest } from '../../middleware/validateRequest';
import { TravelPlanController } from './travel-plan.controller';
import { TravelPlanValidation } from './travel-plan.validation';
import { Router } from "express";

const router = express.Router();

router.post(
  '/',
  auth('USER', 'ADMIN'),
  validateRequest(TravelPlanValidation.createTravelPlanValidation),
  TravelPlanController.createTravelPlan
);

router.get('/', TravelPlanController.getAllTravelPlans);

router.get('/search', TravelPlanController.searchTravelPlans);

router.get('/:id', TravelPlanController.getTravelPlanById);

router.patch(
  '/:id',
  auth('USER', 'ADMIN'),
  validateRequest(TravelPlanValidation.updateTravelPlanValidation),
  TravelPlanController.updateTravelPlan
);

router.delete('/:id', auth('USER', 'ADMIN'), TravelPlanController.deleteTravelPlan);

export const TravelPlanRoutes: Router = router;