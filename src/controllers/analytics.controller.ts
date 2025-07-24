import {  Response , Request} from "express";

export const getOverview = async ( res: Response) => {
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

export const getBotMetrics = async ( res: Response) => {
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

