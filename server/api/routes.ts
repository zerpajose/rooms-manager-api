import { Router } from 'express';
import api from './payments/routes';

const router: Router = Router();

router.use('/api', api);

export default router;
