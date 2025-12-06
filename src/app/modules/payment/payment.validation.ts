import { z } from 'zod';

const createPaymentValidation = z.object({
  body: z.object({
    type: z.enum(['MONTHLY', 'YEARLY'], {
      required_error: 'Subscription type is required',
    }),
  }),
});

const confirmPaymentValidation = z.object({
  body: z.object({
    sessionId: z.string({
      required_error: 'Session ID is required',
    }),
  }),
});

export const PaymentValidation = {
  createPaymentValidation,
  confirmPaymentValidation,
};