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

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidation),
  AuthController.refreshToken
);

router.post('/logout', AuthController.logout);

export const AuthRoutes: Router = router;