import { Router } from 'express';
import createPayment from './controllers/create.controller';
import getPayment from './controllers/get.controller';
import softDeletePayment from './controllers/softDelete.controller';

const router: Router = Router();

router.use('/payments', [createPayment, getPayment, softDeletePayment]);

export default router;
