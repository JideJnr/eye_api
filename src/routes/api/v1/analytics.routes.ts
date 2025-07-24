import express from 'express';
import { getBotMetrics, getOverview } from '../../../controllers/analytics.controller';

const router = express.Router();

/**
 * @swagger
 * /analytics/overview:
 *   post:
 *     summary: Get general overview analytics
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Overview data returned successfully
 *       500:
 *         description: Server error
 */
router.post('/overview', getOverview);

/**
 * @swagger
 * /analytics/getmetrics:
 *   get:
 *     summary: Get bot performance metrics
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Bot metrics retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/getmetrics', getBotMetrics);

export default router;
