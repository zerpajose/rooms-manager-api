import { Request, Response, Router } from 'express';
import { getPaymentRequestValidator } from '../../../validation/payments';
import { softDeletePayment } from '../logic/softDelete.logic';
import { translateError, CustomError } from '../../../helpers/errors';

const router: Router = Router();

router.delete('/:paymentId', async (req: Request, res: Response) => {
  const { paymentId } = req.params;
  try {
    getPaymentRequestValidator.parse({ paymentId });
    const payment = await softDeletePayment(paymentId);
    if(!payment) {
      throw new CustomError('Payment does not exist', 404);
    }
    res.send({ success: true });
  } catch (error) {
    const translatedError = translateError(error);
    res.status(translatedError.statusCode).send({ message: translatedError.message });
  }
});

export default router;
