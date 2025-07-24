"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const control_routes_1 = __importDefault(require("./control.routes"));
const control_routes_2 = __importDefault(require("./control.routes"));
const control_routes_3 = __importDefault(require("./control.routes"));
const control_routes_4 = __importDefault(require("./control.routes"));
const router = express_1.default.Router();
router.use('/', control_routes_1.default);
router.use('/matches', control_routes_4.default);
router.use('/prediction', control_routes_2.default);
router.use('/country', control_routes_3.default);
exports.default = router;
