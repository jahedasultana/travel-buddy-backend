import { z } from 'zod';

const createSubscriptionValidation = z.object({
  body: z.object({
    type: z.enum(['MONTHLY', 'YEARLY'], {
      required_error: 'Subscription type is required',
    }),
  }),
});

export const PaymentValidation = {
  createSubscriptionValidation,
};