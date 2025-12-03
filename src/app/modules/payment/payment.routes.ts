import express from 'express';
import { auth } from '../../middleware/auth';
import { validateRequest } from '../../middleware/validateRequest';
import { PaymentController } from './payment.controller';
import { PaymentValidation } from './payment.validation';
import { Router } from "express";

const router = express.Router();

router.post(
  '/create-subscription',
  auth('USER', 'ADMIN'),
  validateRequest(PaymentValidation.createSubscriptionValidation),
  PaymentController.createSubscription
);

router.post('/webhook', PaymentController.handleWebhook);

router.get('/subscriptions', auth('USER', 'ADMIN'), PaymentController.getUserSubscriptions);

export const PaymentRoutes: Router = router;