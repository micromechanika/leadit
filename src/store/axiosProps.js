import axios from 'axios';

const SERVER_URL = 'http://127.0.0.1:3000';

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
  headers: { 'content-type': 'application/json; charset=utf-8' },
});
