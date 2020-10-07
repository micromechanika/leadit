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
  },
  actions: {
    getBotList: (context) => {
      instance.get(ROUTES.get.botsList)
        .then((response) => {
          context.commit('botList', response.data);
        })
        .catch((err) => console.error(err));
    },
    deleteBot: (context, payload) => {
      instance.put(ROUTES.delete.deleteBot, payload)
        .then(() => {
          context.commit('removeBot', JSON.parse(payload));
        })
        .catch((err) => console.error(err));
    },
  },
};
export default allBots;
