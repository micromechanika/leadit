// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from '../axiosProps';

const refactorBotState = () => ({
  bot: {
    name: '',
    description: '',
    image: {
      src: '',
      name: '',
      size: 0,
    },
    preview: {
      src: '',
      name: '',
      size: 0,
    },
    date: '',
  },
});

const refBot = {
  state: refactorBotState(),
  getters: {
    refBot: (state) => state.bot,
  },
  mutations: {
    resetRefactorBotState: (state) => {
      Object.assign(state, refactorBotState());
    },
    refactorBot: (state, payload) => { Object.assign(state.bot, payload); },
  },
  actions: {
    putBot: (context, payload) => {
      instance.put(ROUTES.put.changeBot, JSON.stringify(payload))
        .then(() => {
          context.commit('refactorBot', payload);
        })
        .then(() => {
          context.commit('showRefactorBot', payload);
        })
        .catch((err) => console.error(err));
    },
  },
};

export default refBot;
