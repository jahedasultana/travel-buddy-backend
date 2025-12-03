import { NextFunction, Request, Response } from 'express';
import config from '../../../config';
import { sendResponse } from '../../helper/responseHelper';
import { AuthService } from './auth.service';

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.registerUser(req.body);

    res.cookie('accessToken', result.accessToken, {
      secure: config.env === 'production',
      httpOnly: true,
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie('refreshToken', result.refreshToken, {
      secure: config.env === 'production',
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'User registered successfully',
      data: {
        user: result.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.loginUser(req.body);

    res.cookie('accessToken', result.accessToken, {
      secure: config.env === 'production',
      httpOnly: true,
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie('refreshToken', result.refreshToken, {
      secure: config.env === 'production',
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      data: {
        user: result.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.cookies;
    const result = await AuthService.refreshToken(refreshToken);

    res.cookie('accessToken', result.accessToken, {
      secure: config.env === 'production',
      httpOnly: true,
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Access token refreshed successfully',
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Logged out successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  registerUser,
  loginUser,
  refreshToken,
  logout,
};