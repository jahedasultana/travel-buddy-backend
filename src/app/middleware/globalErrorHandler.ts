import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import AppError from '../error/AppError';
import { sendResponse } from '../helper/responseHelper';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';

  if (error instanceof ZodError) {
    statusCode = 400;
    message = error.errors.map((err) => err.message).join(', ');
  } else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  sendResponse(res, {
    success: false,
    statusCode,
    message,
  });
};

export default globalErrorHandler;