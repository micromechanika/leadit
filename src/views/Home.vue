<template>
  <div  class="home">
    <BotsList/>
  </div>
</template>

<script>
import BotsList from '../components/BotsList.vue';

export default {
  name: 'Home',
  components: {
    BotsList,
  },
};
</script>
