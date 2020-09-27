<template>
  <div class="modalForm">
    <form>
      <label for="botname">bot name:</label><br>
      <input type="text" id="botname" name="botname" :value=bot_data.name><br>

      <label for="botdescription">bot description:</label><br>
      <input type="text" id="botdescription" name="botdescription" :value=bot_data.description><br>

      <label for="file">Choose a file:</label><br>
      <input type="file" name="files[]"
             id="file"
             data-multiple-caption="{count} files selected"
             multiple/><br>

      <label for="botdate">bot date:</label><br>
      <input type="text" id="botdate" name="botdate" :value=bot_data.date><br>

      <div class="saveBotInfo"><p>Save</p></div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'MoodalForm',
  props: {
    bot_data: {
      type: Object,
      default() {
        return {
          name: 'leadit bot',
          description: 'leadit you',
          image: 'som image padr',
          date: '25.09.2020',
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .modalForm {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $modal_form_background_color;
    z-index: 1000;
  }

  form {
    width: 80vw;
    height: 60vh;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $form_background_color;
    border: 0.1em solid $form_border_color;
  }

  .saveBotInfo {
    width: 10vmax;
    margin: 1em;

    @include button(
        $save_button_color,
        $save_button_border_color,
        $save_button_text_color,
        $save_button_hover_color
    );

    p {
      @include centryfy_row;
    }
  }
</style>
