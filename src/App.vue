<template>
  <div>
    <router-view />
  </div>
</template>

<script>

import IndexPage from './views/IndexPage.vue';

export default {
  name: 'App',
  components: {
    IndexPage,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: rgb(216, 216, 216);
  margin: 0;
  padding: 0;
}
</style>
