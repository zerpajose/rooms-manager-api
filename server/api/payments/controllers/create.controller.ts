import { Request, Response, Router } from 'express';
import { createPayment } from '../logic/create.logic';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  // await validateCreatePayment(req, res);
  const paymentRequest = req.body;
  const payment = await createPayment(paymentRequest);
  res.send(payment);
});

export default router;
