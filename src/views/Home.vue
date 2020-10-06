<template>
  <div class="home">
    <button class="createBot"
            @click="createNewBot" >
      <p>create bot</p>
    </button>
    <BotsList/>
    <MoodalForm v-show="openModal" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import BotsList from '../components/BotsList.vue';
import MoodalForm from '../components/MoodalForm.vue';

export default {
  name: 'Home',
  components: {
    MoodalForm,
    BotsList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ openModal: 'openModal' }),
  },
  methods: {
    ...mapMutations({ resetState: 'resetNewBotState', togleModal: 'openModal' }),
    createNewBot() {
      this.$store.commit('changes', false);
      this.resetState();
      this.togleModal();
    },
  },
};
</script>

<style lang="scss" scoped>
  .createBot {
    width: 10vw;
    margin: 1em;

    @include button(
        $create_button_color,
        $create_button_border_color,
        $create_button_text_color,
        $create_button_hover_color
    );

    p {
      @include centryfy_row;
    }

  }
</style>
