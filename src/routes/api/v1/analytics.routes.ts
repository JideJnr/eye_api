import express from 'express';
import { getBotMetrics, getLogs, getOverview } from '../../../controllers/analytics.controller';

const router = express.Router();

router.get('/logs', getLogs);
router.post('/overview', getOverview);
router.get('/getmetrics', getBotMetrics);

export default router;
