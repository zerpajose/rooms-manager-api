import { Request, Response, Router } from 'express';
import { createPaymentRequestValidator } from '../../../validation/payments';
import { createPayment } from '../logic/create.logic';
import { translateError } from '../../../helpers/errors';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  const paymentRequest = req.body;
  try{
    createPaymentRequestValidator.parse(paymentRequest);
    const payment = await createPayment(paymentRequest);
    res.send(payment);
  } catch (error) {
    const translatedError = translateError(error);
    res.status(translatedError.statusCode).send({ message: translatedError.message });
  }
});

export default router;
