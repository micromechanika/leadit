// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from '../axiosProps';

const newBotState = () => ({
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
});

const newBot = {
  state: newBotState(),
  getters: {
    newBot: (state) => state.bot,
  },
  mutations: {
    resetNewBotState: (state) => {
      Object.assign(state, newBotState());
    },
  },
  actions: {
    postBot: (context, payload) => {
      // console.log(payload);
      instance.headers = {
        'content-type': 'multipart/form-data',
      };
      instance.post(ROUTES.post.newBot, payload)
        .then(() => {
          this.$store.commit('botListAdd', payload);
        })
        .catch((err) => console.error(err));
    },
  },
};

export default newBot;
