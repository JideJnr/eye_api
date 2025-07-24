"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const control_controller_1 = require("../../../controllers/control.controller");
const router = express_1.default.Router();
router.post('/start', control_controller_1.startEngine);
router.get('/stop', control_controller_1.stopEngine);
router.get('/all', control_controller_1.getAllBot);
router.post('/start/id', control_controller_1.startBotById);
router.get('/stop/id', control_controller_1.startBotById);
router.get('/betbuilder', control_controller_1.runBetBuilder);
router.get('/status/id', control_controller_1.getStatusById);
router.post('/prediction', control_controller_1.postPrediction);
exports.default = router;
