import { Request, Response, Router } from 'express';
import { getPaymentInputValidator } from '../../../validation/payments/get';
import { getPayment } from '../logic/get.logic';
import { z } from 'zod';

const router: Router = Router();

router.get('/:paymentId', async (req: Request, res: Response) => {
  const { paymentId } = req.params;
  try {
    getPaymentInputValidator.parse({ paymentId });
    const payment = await getPayment(paymentId);
    if(!payment) {
      throw new Error('Payment not found');
    }
    res.send(payment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ message: error.issues });
    }

    let message = 'Unknown error';
    
    if (error instanceof Error) message = error.message
    
    if(message === 'Unknown error') {
      res.status(500).send({ message });
    }
    if(message === 'Payment not found') {
      res.status(404).send({ message });
    }
  }
});

export default router;
