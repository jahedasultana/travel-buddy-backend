import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { TravelPlanRoutes } from '../modules/travel-plan/travel-plan.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { PaymentRoutes } from '../modules/payment/payment.routes';
import { Router } from "express";

const router: Router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/travel-plans',
    route: TravelPlanRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '/payments',
    route: PaymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;