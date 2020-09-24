<template>
  <div class="botData">
    <div class="botName"><p>som bot name</p></div>
    <div class="deleteBot"><p>remove bot</p></div>
  </div>
</template>

<script>
export default {
  name: 'BotData',
};
</script>

<style lang="scss" scoped>
  .botData {
    width: 100%;
    height: 100%;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8rem;
  }

  .botName {
    width: 90%;
    margin: 1rem;

    p {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .deleteBot {
    width: 10%;
    margin: 1rem;
    border: 0.1rem solid crimson;
    border-radius: 0.5rem;
    background-color: crimson;

    p {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
</style>
