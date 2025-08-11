import {  Response , Request} from "express";
import { sendGetCommand } from "../botClient";

export const getOverview = async ( req: Request, res: Response) => {
  try {
     res.status(201).json({ 
      success: true,
      error: 'Failed to start bot service',
      details: 'Unknown error'
    });
  } catch (error) {
    res.status(201).json({ 
      success: false,
      error: 'Failed to start bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const getBotMetrics = async ( req: Request, res: Response) => {
  try {
     res.status(200).json({ 
      success: true,
      error: 'Failed to start bot service',
      details: 'Unknown error'
    });
  } catch (error) {
    res.status(200).json({ 
      success: false,
      error: 'Failed to start bot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

  export const getLogs = async (req:Request, res: Response) => {
    try {
      const result = await sendGetCommand('start');
      res.json(result)
    } catch (error) {
      res.status(200).json({
        success: false, 
        error: 'Failed to start engine service',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

