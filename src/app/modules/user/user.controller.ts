import { NextFunction, Response } from 'express';
import { sendResponse } from '../../helper/responseHelper';
import { uploadToCloudinary } from '../../helper/cloudinary';
import { AuthenticatedRequest } from '../../types';
import { UserService } from './user.service';

const getUserProfile = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserProfile(id);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User profile retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateUserProfile = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let updateData = req.body;

    // Handle profile image upload
    if (req.file) {
      const imageUrl = await uploadToCloudinary(req.file);
      updateData.profileImage = imageUrl;
    }

    const result = await UserService.updateUserProfile(id, updateData);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User profile updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllUsers();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Users retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
};