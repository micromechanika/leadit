<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    @include font_rule
  }

  .container {
    @include container
  }
</style>
