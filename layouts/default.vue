<template lang="pug">
header.head-content 
  AtomsHeader
main.page-content
  slot 
footer.foot-content
  AtomsFooter 
</template>

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
  // font-size: 62.5%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}

.head-content {
  position: sticky;
  top: 0;
  width: 100vw;
  // height: 102px;
  z-index: 10;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.14), 0px 0px 1px 1px rgb(0 0 0 / 12%);
}
.page-content {
  position: relative;
  left: 0px;
  width: 100vw;
  min-height: 82vh;
}
.foot-content {
  width: 100vw;
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
