import { Request, Response, Router } from 'express';
import { getPaymentRequestValidator } from '../../../validation/payments';
import { getPayment } from '../logic/get.logic';
import { translateError, CustomError } from '../../../helpers/errors';

const router: Router = Router();

router.get('/:paymentId', async (req: Request, res: Response) => {
  const { paymentId } = req.params;
  try {
    getPaymentRequestValidator.parse({ paymentId });
    const payment = await getPayment(paymentId);
    if(!payment) {
      throw new CustomError('Payment not found', 404);
    }
    res.send(payment);
  } catch (error) {
    const translatedError = translateError(error);
    res.status(translatedError.statusCode).send({ message: translatedError.message });
  }
});

export default router;
