import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import config from './config';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: config.frontend_url,
    credentials: true,
  })
);

// Application routes
app.use('/api/v1', router);

// Health check
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Travel Buddy API is running successfully!',
  });
});

// Global error handler
app.use(globalErrorHandler);

// Not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'API Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;