import express from 'express';
import controlRoutes from './control.routes';
import analyticsRoutes from './analytics.routes';
import authRoutes from './auth.routes';

const router = express.Router();

router.use('/control', controlRoutes);
router.use('/auth', authRoutes);
router.use('/analytics', analyticsRoutes);

export default router;