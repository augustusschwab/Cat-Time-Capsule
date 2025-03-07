import { Router } from 'express';
import { emailRouter } from './email-routes.js';
import { catRouter } from './cat-routes.js';

const router = Router();

router.use('/email', emailRouter);
router.use('/cat', catRouter);

export default router;
