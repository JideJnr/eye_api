"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const control_controller_1 = require("../../../controllers/control.controller");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Bot Control
 *   description: Engine and bot control endpoints
 */
/**
 * @swagger
 * /control/start:
 *   post:
 *     summary: Start the entire engine
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: Engine started successfully
 *       500:
 *         description: Failed to start engine
 */
router.post('/start', control_controller_1.startEaglesEye);
/**
 * @swagger
 * /control/stop:
 *   get:
 *     summary: Stop the entire engine
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: Engine stopped successfully
 */
router.get('/stop', control_controller_1.stopEaglesEye);
/**
 * @swagger
 * /control/all:
 *   get:
 *     summary: Get all available bots
 *     tags: [Bot Control]
 *     responses:
 *       200:
 *         description: List of bots returned
 */
router.get('/all', control_controller_1.getAllEngines);
/**
 * @swagger
 * /control/start/id:
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
router.post('/start/id', control_controller_1.startEngineById);
/**
 * @swagger
 * /control/stop/id:
 *   get:
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
router.get('/stop/id', control_controller_1.stopEngineById);
/**
 * @swagger
 * /control/status/id:
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
router.get('/status/id', control_controller_1.checkEngineStatus);
exports.default = router;
