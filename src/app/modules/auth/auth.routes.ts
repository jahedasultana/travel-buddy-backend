import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import { Router } from "express";

const router = express.Router();

router.post(
  '/register',
  validateRequest(AuthValidation.registerValidation),
  AuthController.registerUser
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidation),
  AuthController.loginUser
);

export const AuthRoutes: Router = router;