import express from 'express';
import controlRoutes from './control.routes';
import predictionRoutes from './control.routes';
import countryRoutes from './control.routes';
import matchesRoutes from './control.routes';

const router = express.Router();

router.use('/', controlRoutes);
router.use('/matches', matchesRoutes);
router.use('/prediction', predictionRoutes);
router.use('/country', countryRoutes);



export default router;
