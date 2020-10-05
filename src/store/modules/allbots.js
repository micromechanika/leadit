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
    removeBot: (state, payload) => {
      state.botList = state.botList.filter((i) => i.id !== payload);
    },
    // removeImage: (state, payload) => { state.bots.find((i) => i.id === payload); },
  },
  actions: {
    botList: (context) => {
      const botList = [
        {
          id: '1',
          name: 'leadit bot',
          description: 'leadit you',
          image: {},
          preview: {},
          date: 'Date Sat Oct 31 2020 19:38:00 GMT+0200 (Eastern European Standard Time)',
        },
        {
          id: '2',
          name: 'cnn bot',
          description: 'cnn',
          image: {},
          preview: {},
          date: 'Date Sat Oct 31 2020 19:38:00 GMT+0200 (Eastern European Standard Time)',
        },
        {
          id: '3',
          name: 'news bot',
          description: 'news you',
          image: {},
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
