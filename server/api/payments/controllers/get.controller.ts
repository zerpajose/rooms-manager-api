import { Request, Response, Router } from 'express';
import { getPayment } from '../logic/get.logic';

const router: Router = Router();

router.get('/:paymentId', async (req: Request, res: Response) => {
  // await validateCreatePayment(req, res);
  console.log('req.params', req.params);
  const { paymentId } = req.params;
  const payment = await getPayment(paymentId);
  res.send(payment);
});

export default router;
