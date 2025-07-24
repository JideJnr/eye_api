"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = exports.getSuggestion = exports.getAllGamesByLogic = exports.getAllLogic = exports.getPredictionById = exports.postPrediction = exports.runBetBuilder = exports.getStatusById = exports.startBotById = exports.getAllBot = exports.stopEngine = exports.startEngine = void 0;
const botClient_1 = require("../botClient");
const startEngine = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('start');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.startEngine = startEngine;
const stopEngine = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('stop');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.stopEngine = stopEngine;
const getAllBot = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('all');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getAllBot = getAllBot;
const startBotById = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('start/id');
        res.json(result);
    }
    catch (error) {
        res.status(200).json({
            success: false,
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.startBotById = startBotById;
const getStatusById = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('getStatus/id');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getStatusById = getStatusById;
const runBetBuilder = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('betBuilder');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.runBetBuilder = runBetBuilder;
const postPrediction = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('prediction/id');
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.postPrediction = postPrediction;
const getPredictionById = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('prediction/id');
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            error: 'Failed to stop bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getPredictionById = getPredictionById;
const getAllLogic = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('logic/all');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getAllLogic = getAllLogic;
const getAllGamesByLogic = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('logic/all');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getAllGamesByLogic = getAllGamesByLogic;
const getSuggestion = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('logic/all');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getSuggestion = getSuggestion;
const getUserData = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('logic/all');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getUserData = getUserData;
