<template>
  <div  class="home">
    <BotsList/>
    <MoodalForm/>
  </div>
</template>

<script>
import BotsList from '../components/BotsList.vue';
import MoodalForm from '../components/MoodalForm.vue';

export default {
  name: 'Home',
  components: {
    MoodalForm,
    BotsList,
  },
};
</script>
