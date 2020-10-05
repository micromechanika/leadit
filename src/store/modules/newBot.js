// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from '../axiosProps';

const botState = () => ({
  bot: {
    id: `${Date.now()}`,
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
  openModal: false,
  changes: false,
});

const newBot = {
  state: botState(),
  getters: {
    bot: (state) => state.bot,
    openModal: (state) => state.openModal,
    changes: (state) => state.changes,
  },
  mutations: {
    resetBotState: (state) => {
      Object.assign(state, botState());
    },
    openModal: (state) => {
      state.openModal = !state.openModal;
    },
    changes: (state, payload) => {
      state.changes = payload;
    },
    refactorBot: (state, payload) => { state.bot = payload; },
  },
  actions: {
    addBot: (context, payload) => {
      console.log(payload);
      // instance.headers = {
      //   'content-type': 'multipart/form-data',
      // };
      //
      // instance.post(ROUTES.post.newBot, payload)
      //   .then(() => {
      //     // context.commit('addBot', payload);
      //     // this.$store.commit('botListAdd', JSON.parse(payload));
      //   })
      //   .catch((err) => console.error(err));
    },
  },
};

export default newBot;
