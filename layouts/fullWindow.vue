<template lang="pug">
#app
  Header.header(v-model:buger-active="bugerActive")
  main.page-full-content
    slot 
</template>
<script setup lang="ts">
const bugerActive = ref(false);
</script>

<style lang="scss">
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.page-full-content {
  position: relative;
  padding-top: 70px;
}
.header {
  position: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
