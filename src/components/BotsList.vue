<template>
  <div class="botlist">
    <BotData/>
  </div>
</template>

<script>
import BotData from './BotData.vue';

export default {
  name: 'BotList',
  components: {
    BotData,
  },
};
</script>

<style lang="scss" scoped>
  .botlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
</style>
