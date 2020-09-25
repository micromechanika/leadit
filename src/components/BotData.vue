<template>
  <div class="botData">
    <div class="botName"><p>{{bot_data.name}}</p></div>
    <div class="deleteBot"><p>remove bot</p></div>
  </div>
</template>

<script>
export default {
  name: 'BotData',
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
    selected: {
      type: null,
      default() {
        return null;
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
    width: 90vmax;
    margin: 1em;

    p {
     @include centryfy_row;
    }
  }

  .deleteBot {
    width: 10vmax;
    margin: 1em;

    @include delete_button;

    p {
      @include centryfy_row;
    }
  }
</style>
