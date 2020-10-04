<template>
  <div class="botlist">
    <BotData
      v-for="(bot, botIndex) in this.bots"
      :key="botIndex"
      :bot="bot"
      @removeBot="removeBot(botIndex)"
      @refactorBot="refactorBot(botIndex)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BotData from './BotData.vue';

export default {
  name: 'BotList',
  components: {
    BotData,
  },
  computed: {
    ...mapGetters({ bots: 'botList' }),
  },
  methods: {
    removeBot(key) {
      this.$store.commit('removeBot', key);
    },
    refactorBot(key) {
      this.$store.commit('refactorBot', this.bots[key]);
    },
  },
  beforeCreate() {
    this.$store.dispatch('botList');
  },
};
</script>

<style lang="scss" scoped>
  .botlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.5em;
  }
</style>
