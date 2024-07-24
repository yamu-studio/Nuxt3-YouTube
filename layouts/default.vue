<template lang="pug">
header.head-content
  AtomsHeader(v-model:buger-active="bugerActive")
//- side
.page-content
  aside.sidebar(v-if="!UserStore.isMobile")
    AtomsSideMenu(v-model:buger-active="bugerActive")
  main.main-content
    slot 
  

</template>

<script setup lang="ts">
const UserStore = useUserStore();
const bugerActive = ref(false);
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  // font-size: 62.5%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}

.head-content {
  position: fixed;
  top: 0;
  width: 100vw;
  // height: 102px;
  z-index: 10;
}
.page-content {
  position: relative;
  left: 0px;
  padding-top: 70px;
  width: 100vw;
  min-height: 82vh;
}
.sidebar {
  position: fixed;
  width: 68px;
  z-index: 20;
}
.main-content {
  position: relative;

  @media screen and (min-width: 768px) {
    left: 68px;
    width: 95%;
  }
}
// ページ移動時のcss
// 右から入って左に抜けてくアニメーション
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s 0s ease;
}
</style>
