import Vue from 'vue';
import Vuex from 'vuex';

import allBots from './modules/allbots';
import newBot from './modules/newBot';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { newBot, allBots },
});

// commit -> mutations
// dispatch -> actions
