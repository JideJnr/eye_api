import { Request, Response } from "express";
import { sendGetCommand, sendPostCommand } from "../botClient";

  export const startEaglesEye = async (req:Request, res: Response) => {
    try {
      const result = await sendPostCommand('start');
      res.json(result)
    } catch (error) {
      res.status(200).json({
        success: false, 
        error: 'Failed to start engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const stopEaglesEye = async (req:Request, res: Response) => {
    try {
      const result = await sendPostCommand('stop');
      res.json(result);
    } catch (error) {
      res.status(200).json({
        success: false, 
        error: 'Failed to stop engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const checkEyeStatus = async (req:Request, res: Response) => {
    try {
      const result = await sendGetCommand('status');
      res.json(result);
    } catch (error) {
      res.status(200).json({
        success: false, 
        error: 'Failed to stop engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const getAllEngines = async (req:Request, res: Response) => {
    try {
      const result = await sendPostCommand('get/all');
      res.json(result);
    } catch (error) {
      res.status(200).json({
        success: false, 
        error: 'Failed to start engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const startEngineById = async (req: Request , res: Response ) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(200).json({ 
          success: false, 
          error: 'Engine ID is required',
          details: 'No engine ID provided'
        });
      }
      const result = await sendPostCommand(`start/${id}`);
      res.json(result);
    } catch (error) {
      res.status(200).json({ 
        success: false,
        error: 'Failed to stop engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const stopEngineById = async (req: Request , res: Response) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(200).json({ 
          success: false, 
          error: 'Engine ID is required',
          details: 'No engine ID provided'
        });
      }
      const result = await sendPostCommand(`stop/${id}`);
      res.json(result);
    } catch (error) {
      res.status(200).json({ 
        success: false,
        error: 'Failed to stop engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  export const checkEngineStatus = async (req: Request , res: Response) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(200).json({ 
          success: false, 
          error: 'Engine ID is required',
          details: 'No engine ID provided'
        });
      }
      const result = await sendPostCommand(`status/${id}`);
      res.json(result);
    } catch (error) {
      res.status(200).json({ 
        error: 'Failed to start engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };
