import { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../helper/responseHelper';
import { AuthService } from './auth.service';

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.registerUser(req.body);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'User registered successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.loginUser(req.body);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  registerUser,
  loginUser,
};