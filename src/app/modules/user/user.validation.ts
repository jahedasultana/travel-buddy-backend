import { z } from 'zod';

const updateUserValidation = z.object({
  body: z.object({
    fullName: z.string().min(2).optional(),
    bio: z.string().max(500).optional(),
    currentLocation: z.string().optional(),
    visitedCountries: z.array(z.string()).optional(),
    travelInterests: z.array(z.string()).optional(),
  }),
});

export const UserValidation = {
  updateUserValidation,
};