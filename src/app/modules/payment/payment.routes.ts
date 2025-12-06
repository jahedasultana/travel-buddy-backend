import express from 'express';
import { auth } from '../../middleware/auth';
import { validateRequest } from '../../middleware/validateRequest';
import { PaymentController } from './payment.controller';
import { PaymentValidation } from './payment.validation';
import { Router } from "express";

const router = express.Router();

router.post(
  '/create-payment',
  auth('USER', 'ADMIN'),
  validateRequest(PaymentValidation.createPaymentValidation),
  PaymentController.createPayment
);

router.post(
  '/confirm-payment',
  validateRequest(PaymentValidation.confirmPaymentValidation),
  PaymentController.confirmPayment
);

export const PaymentRoutes: Router = router;