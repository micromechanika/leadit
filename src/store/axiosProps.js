import axios from 'axios';

const SERVER_URL = 'https://my.com';

export const ROUTES = {
  get: {
    botsList: '/botslist',
  },
  post: {
    newBot: '/newbot',
  },
  put: {
    changeBot: '/changebot',
  },
  delete: {
    deleteBot: '/delete',
  },
};

export const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});
