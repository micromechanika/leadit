import Vue from 'vue';
import Vuex from 'vuex';

import allBots from './allbots';
import newBot from './newBot';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { newBot, allBots },
});

// commit -> mutations
// dispatch -> actions
