import axios from 'axios';

const baseURL = process.env.BOT_SERVICE_URL || 'https://godscpr.onrender.com';

export const sendCommand = async (command: any) => {
  const { data } = await axios.post(`${baseURL}/${command}`);
  return data;
};