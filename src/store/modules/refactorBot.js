// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from '../axiosProps';

const refactorBotState = () => ({
  bot: {
    id: '',
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
      instance.headers = { 'content-type': 'application/json; charset=utf-8' };
      instance.put(ROUTES.put.changeBot, payload)
        .then(() => {
          this.$store.commit('botListAdd', this.bot);
        })
        .catch((err) => console.error(err));
    },
  },
};

export default refBot;
