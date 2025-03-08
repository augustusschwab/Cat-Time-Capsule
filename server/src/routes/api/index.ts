import { Router } from 'express';
import { emailRouter } from './email-routes.js';
import { catRouter } from './cat-routes.js';
import { timeCapsuleRouter } from './timecapsule-user.js';

const router = Router();

router.use('/email', emailRouter);
router.use('/cat', catRouter);
router.use('/time-capsule', timeCapsuleRouter);

export default router;
