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
      const bot = JSON.parse(payload);
      instance.put(ROUTES.put.changeBot, payload)
        .then(() => {
          context.commit('refactorBot', bot);
        })
        .then(() => {
          context.commit('showRefactorBot', bot);
        })
        .then(() => {
          context.commit('resetRefactorBotState');
          context.commit('resetModalState');
        })
        .catch((err) => console.error(err));
    },
  },
};

export default refBot;
