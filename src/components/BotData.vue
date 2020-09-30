<template>
  <div class="botData">
    <div class="botName"><p>{{bot.name}}</p></div>
    <button class="deleteBot"><p>remove bot</p></button>
  </div>
</template>

<script>
export default {
  name: 'BotData',
  props: {
    bot: {
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
  .botData {
    width: 100%;
    height: 100%;
    margin: 0.5em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 1em;
    border: 0.1em solid black;
  }

  .botName {
    width: 90vw;
    margin: 1em;

    p {
     @include centryfy_row;
    }
  }

  .deleteBot {
    width: 10vw;
    margin: 1em;

    @include button(
        $delete_button_color,
        $delete_button_border_color,
        $delete_button_text_color,
        $delete_button_hover_color
    );

    p {
      @include centryfy_row;
    }

  }
</style>
