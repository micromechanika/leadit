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
  },
  actions: {
    botList: (context) => {
      const botList = [
        {
          name: 'leadit bot',
          description: 'leadit you',
          image: 'som image padr',
          date: '25.09.2020',
        },
        {
          name: 'cnn bot',
          description: 'cnn',
          image: 'cnn logo',
          date: '25.09.2020',
        },
        {
          name: 'news bot',
          description: 'news you',
          image: 'som image news',
          date: '25.09.2020',
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