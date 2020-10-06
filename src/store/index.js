import Vue from 'vue';
import Vuex from 'vuex';

import allBots from './modules/allbots';
import newBot from './modules/newBot';
import modal from './modules/modal';
import refBot from './modules/refactorBot';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    newBot, allBots, modal, refBot,
  },
});

// commit -> mutations
// dispatch -> actions
