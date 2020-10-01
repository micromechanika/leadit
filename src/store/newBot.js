// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from './axiosProps';

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
});

const newBot = {
  state: botState(),
  getters: {
    newBot: (state) => state.bot,
    openModal: (state) => state.openModal,
  },
  mutations: {
    newBot: (state, payload) => {
      this.$store.allBots.botList.push(payload);
    },
    openModal: (state) => {
      state.openModal = !state.openModal;
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
