import { z } from "zod";

export const getPaymentRequestValidator = z.object({
  paymentId: z.string().uuid(),
});

export const createPaymentRequestValidator = z.object({
  amount: z.number().int().positive(),
  paymentMethod: z.enum(["cash", "transfer"]),
  description: z.string().max(100),
  currency: z.enum(["usd", "ves"]),
});
