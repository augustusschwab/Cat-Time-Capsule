import { Router } from 'express';
import apiRoutes from './api/index.js';
import authRoutes from 

const router = Router();

router.use('/auth', authRoutes)
router.use('/api', apiRoutes);

export default router;
