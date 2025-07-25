import axios from 'axios';

const baseURL = process.env.BOT_SERVICE_URL || 'https://eye-bot.onrender.com';

export const sendPostCommand = async (command: any) => {
  const { data } = await axios.post(`${baseURL}/${command}`);
  return data;
};

export const sendGetCommand = async (command: any) => {
  const { data } = await axios.get(`${baseURL}/${command}`);
  return data;
};