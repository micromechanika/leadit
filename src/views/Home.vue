<template>
  <div  class="home">
    <BotList/>
  </div>
</template>

<script>
import BotList from '../components/BotList.vue';

export default {
  name: 'Home',
  components: {
    BotList,
  },
};
</script>
