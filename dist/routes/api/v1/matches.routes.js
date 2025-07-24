"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const match_controller_1 = require("../../../controllers/match.controller");
const router = express_1.default.Router();
router.get('/match/id', match_controller_1.geMatchById);
router.get('/match/date', match_controller_1.getMatchesByDate);
router.get('/country/id', match_controller_1.getCountryById);
router.get('/country', match_controller_1.getAllCountries);
router.get('/team/id', match_controller_1.getTeamById);
router.get('/player/id', match_controller_1.getPlayerById);
exports.default = router;
