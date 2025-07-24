"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPredictionsByDate = exports.getBotMetrics = exports.getOverview = void 0;
const getOverview = async (res) => {
    try {
        res.status(201).json({
            success: true,
            error: 'Failed to start bot service',
            details: 'Unknown error'
        });
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getOverview = getOverview;
const getBotMetrics = async (res) => {
    try {
        res.status(201).json({
            success: true,
            error: 'Failed to start bot service',
            details: 'Unknown error'
        });
    }
    catch (error) {
        res.status(201).json({
            success: false,
            error: 'Failed to start bot service',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
exports.getBotMetrics = getBotMetrics;
const getAllPredictionsByDate = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: []
        });
    }
    catch (error) {
    }
};
exports.getAllPredictionsByDate = getAllPredictionsByDate;
