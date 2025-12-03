import express from 'express';
import { auth } from '../../middleware/auth';
import { upload } from '../../middleware/multer';
import { validateRequest } from '../../middleware/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import { Router } from "express";

const router = express.Router();

router.get('/',
  auth('ADMIN'),
  UserController.getAllUsers);

router.get('/:id', 
  UserController.getUserProfile);

router.patch(
  '/:id',
  auth('USER', 'ADMIN'),
  upload.single('profileImage'),
  validateRequest(UserValidation.updateUserValidation),
  UserController.updateUserProfile
);

export const UserRoutes: Router = router;