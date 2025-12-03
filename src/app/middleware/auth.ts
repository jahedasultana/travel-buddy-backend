import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import AppError from '../error/AppError';
import { AuthenticatedRequest, IAuthUser } from '../types';
import prisma from '../shared/prisma';

export const auth = (...requiredRoles: string[]) => {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');

      if (!token) {
        throw new AppError(401, 'You are not authorized');
      }

      const decoded = jwt.verify(token, config.jwt.jwt_secret as string) as JwtPayload;

      const { id, email, role } = decoded as IAuthUser;

      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new AppError(404, 'User not found');
      }

      if (requiredRoles.length && !requiredRoles.includes(role)) {
        throw new AppError(403, 'Forbidden');
      }

      req.user = { id, email, role };
      next();
    } catch (error) {
      next(error);
    }
  };
};