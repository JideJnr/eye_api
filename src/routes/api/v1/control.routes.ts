import express from 'express';
import { checkEngineStatus, getAllEngines, startEngineById, startEaglesEye, stopEngineById, stopEaglesEye, checkEyeStatus } from '../../../controllers/control.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Bot Control
 *   description: Engine and bot control endpoints
 */

/**
 * @swagger
 * /start:
 *   post:
 *     summary: Start the entire engine
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: Engine started successfully
 *       500:
 *         description: Failed to start engine
 */
router.post('/start', startEaglesEye);

/**
 * @swagger
 * /stop:
 *   post:
 *     summary: Stop the entire engine
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: Engine stopped successfully
 */
router.post('/stop', stopEaglesEye);

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Get eagle eye status
 *     tags: [Bot Control]
 *     responses:
 *      200:
 *        description: Engine status fetched successfully
 *    
 */
router.get('/status', checkEyeStatus);

/**
 * @swagger
 * /get/all:
 *   get:
 *     summary: Get all available bots
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: List of bots returned
 */
router.get('/get/all', getAllEngines);

/**
 * @swagger
 * /start/id:
 *   post:
 *     summary: Start a specific bot by ID
 *     tags: [Bot Control]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "test_bot"
 *     responses:
 *       200:
 *         description: Bot started successfully
 */
router.post('/start/id', startEngineById);

/**
 * @swagger
 * /stop/id:
 *   post:
 *     summary: Stop a specific bot by ID
 *     tags: [Bot Control]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: "test_bot"
 *     responses:
 *       200:
 *         description: Bot stopped successfully
 */
router.post('/stop/id', stopEngineById);

/**
 * @swagger
 * /status/id:
 *   get:
 *     summary: Get status of a specific bot
 *     tags: [Bot Control]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "test_bot"
 *     responses:
 *       200:
 *         description: Bot status returned
 */
router.get('/status/id', checkEngineStatus);

export default router;
