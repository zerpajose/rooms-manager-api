import { z } from "zod";

export const getPaymentInputValidator = z.object({
  paymentId: z.string().uuid(),
});
