import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import AppError from '../../error/AppError';
import prisma from '../../shared/prisma';
import { IAuthResponse, ILoginUser, IRegisterUser } from './auth.interface';

const registerUser = async (payload: IRegisterUser): Promise<IAuthResponse> => {
  const { email, password, fullName } = payload;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError(400, 'User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      fullName,
    },
  });

  const jwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt.jwt_secret as string, {
    expiresIn: config.jwt.expires_in,
  });

  return {
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      isSubscribed: user.isSubscribed,
      isVerified: user.isVerified,
    },
  };
};

const loginUser = async (payload: ILoginUser): Promise<IAuthResponse> => {
  const { email, password } = payload;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new AppError(401, 'Password is incorrect');
  }

  const jwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt.jwt_secret as string, {
    expiresIn: config.jwt.expires_in,
  });

  return {
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      isSubscribed: user.isSubscribed,
      isVerified: user.isVerified,
    },
  };
};

export const AuthService = {
  registerUser,
  loginUser,
};