"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEngineStatus = exports.stopEngineById = exports.startEngineById = exports.getAllEngines = exports.checkEyeStatus = exports.stopEaglesEye = exports.startEaglesEye = void 0;
const botClient_1 = require("../botClient");
const startEaglesEye = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('start');
        res.json(result);
    }
    catch (error) {
        res.status(200).json({
            success: false,
            error: 'Failed to start engine service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.startEaglesEye = startEaglesEye;
const stopEaglesEye = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('stop');
        res.json(result);
    }
    catch (error) {
        res.status(200).json({
            success: false,
            error: 'Failed to stop engine service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.stopEaglesEye = stopEaglesEye;
const checkEyeStatus = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('status');
        res.json(result);
    }
    catch (error) {
        res.status(200).json({
            success: false,
            error: 'Failed to stop engine service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.checkEyeStatus = checkEyeStatus;
const getAllEngines = async (res) => {
    try {
        const result = await (0, botClient_1.sendCommand)('all');
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start engine service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getAllEngines = getAllEngines;
const startEngineById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                error: 'Engine ID is required',
                details: 'No engine ID provided'
            });
        }
        const result = await (0, botClient_1.sendCommand)(`start/${id}`);
        res.json(result);
    }
    catch (error) {
        res.status(200).json({
            success: false,
            error: 'Failed to stop engine service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.startEngineById = startEngineById;
const stopEngineById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                error: 'Engine ID is required',
                details: 'No engine ID provided'
            });
        }
        const result = await (0, botClient_1.sendCommand)(`stop/${id}`);
        res.json(result);
    }
    catch (error) {
        res.status(200).json({
            success: false,
            error: 'Failed to stop engine service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.stopEngineById = stopEngineById;
const checkEngineStatus = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                error: 'Engine ID is required',
                details: 'No engine ID provided'
            });
        }
        const result = await (0, botClient_1.sendCommand)(`status/${id}`);
        res.json(result);
    }
    catch (error) {
        res.status(201).json({
            error: 'Failed to start engine service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.checkEngineStatus = checkEngineStatus;
