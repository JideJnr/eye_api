"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_js_1 = require("../../../controllers/auth.controller.js");
const validators_js_1 = require("../../../utils/validators.js");
const router = express_1.default.Router();
router.post('/signup', validators_js_1.signupValidator, auth_controller_js_1.signup);
router.post('/signin', auth_controller_js_1.login);
router.post('/resetPassword', auth_controller_js_1.resetPassword);
exports.default = router;
