import { Router } from 'express';
import createPayment from './controllers/create.controller';
import getPayment from './controllers/get.controller';

const router: Router = Router();

router.use('/payments', [createPayment, getPayment]);

export default router;
