<template lang="pug">
#app
  Header.header(v-model:buger-active="bugerActive")
  main.page-content
    slot 
  SideMenu(v-model:buger-active="bugerActive")
    
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
.page-content {
  position: relative;
  left: 68px;
  max-width: 92vw;
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
