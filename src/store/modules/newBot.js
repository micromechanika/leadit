// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from '../axiosProps';

const botState = () => ({
  bot: {
    name: '',
    description: '',
    image: {
      src: '',
      name: '',
      size: 0,
    },
    date: '',
  },
  openModal: false,
  changes: false,
});

const newBot = {
  state: botState(),
  getters: {
    newBot: (state) => state.bot,
    openModal: (state) => state.openModal,
    changes: (state) => state.changes,
  },
  mutations: {
    newBot: (state, payload) => {
      state.bot = payload;
    },
    resetState: (state) => {
      Object.assign(state, botState());
    },
    openModal: (state) => {
      state.openModal = !state.openModal;
    },
    changes: (state, payload) => {
      state.changes = payload;
    },
  },
  actions: {
    newBot: (context, payload) => {
      context.commit('newBot', payload);
      // instance.headers = { 'content-type': 'multipart/form-data' };
      // instance.post(ROUTES.post.newBot, payload)
      //   .then(() => {
      //     context.commit('newBot', payload);
      //   })
      //   .catch((err) => console.error(err));
    },
  },
};

export default newBot;
