<template>
  <div class="botlist">
    <BotData
      v-for="bot in this.bots"
      :key="bot.id"
      :bot="bot"
      @removeBot="removeBot(bot.id)"
      @refactorBot="refactorBot(bot.id)"
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
      this.$store.commit('refactorBot', this.bots.find((i) => i.id === key));
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
