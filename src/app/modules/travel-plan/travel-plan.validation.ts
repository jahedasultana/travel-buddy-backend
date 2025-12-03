import { z } from 'zod';

const createTravelPlanValidation = z.object({
  body: z.object({
    destination: z.string().min(2, 'Destination is required'),
    startDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid start date'),
    endDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid end date'),
    budgetMin: z.number().positive().optional(),
    budgetMax: z.number().positive().optional(),
    travelType: z.enum(['SOLO', 'FAMILY', 'FRIENDS', 'COUPLE']),
    description: z.string().max(1000).optional(),
    itinerary: z.string().max(2000).optional(),
  }),
});

const updateTravelPlanValidation = z.object({
  body: z.object({
    destination: z.string().min(2).optional(),
    startDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid start date').optional(),
    endDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid end date').optional(),
    budgetMin: z.number().positive().optional(),
    budgetMax: z.number().positive().optional(),
    travelType: z.enum(['SOLO', 'FAMILY', 'FRIENDS', 'COUPLE']).optional(),
    description: z.string().max(1000).optional(),
    itinerary: z.string().max(2000).optional(),
    isActive: z.boolean().optional(),
  }),
});

export const TravelPlanValidation = {
  createTravelPlanValidation,
  updateTravelPlanValidation,
};