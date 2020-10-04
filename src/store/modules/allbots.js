// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from '../axiosProps';

const botListState = () => ({
  botList: [],
});
const allBots = {
  state: botListState(),
  getters: {
    botList: (state) => state.botList,
  },
  mutations: {
    botList: (state, payload) => { state.botList = payload; },
    botListAdd: (state, payload) => { state.botList.push(payload); },
    removeBot: (state, payload) => { state.botList.splice(payload, 1); },
  },
  actions: {
    botList: (context) => {
      const botList = [
        {
          name: 'leadit bot',
          description: 'leadit you',
          image: 'som image padr',
          preview: {},
          date: 'Date Sat Oct 31 2020 19:38:00 GMT+0200 (Eastern European Standard Time)',
        },
        {
          name: 'cnn bot',
          description: 'cnn',
          image: 'cnn logo',
          preview: {},
          date: 'Date Sat Oct 31 2020 19:38:00 GMT+0200 (Eastern European Standard Time)',
        },
        {
          name: 'news bot',
          description: 'news you',
          image: 'som image news',
          preview: {},
          date: 'Date Sat Oct 31 2020 19:38:00 GMT+0200 (Eastern European Standard Time)',
        },
      ];
      context.commit('botList', botList);
      // instance.headers = { 'content-type': 'application/json; charset=utf-8' };
      // instance.get(ROUTES.get.botsList)
      //   .then((response) => {
      //     const botList = response.data;
      //     context.commit('botList', botList);
      //   })
      //   .catch((err) => console.error(err));
    },
  },
};
export default allBots;
