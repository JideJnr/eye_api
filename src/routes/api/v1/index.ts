import express from 'express';
import controlRoutes from './control.routes';
import analyticsRoutes from './analytics.routes';
import matchesRoutes from './control.routes';

const router = express.Router();

router.use('/control', controlRoutes);
router.use('/matches', matchesRoutes);
router.use('/analytics', analyticsRoutes);

export default router;