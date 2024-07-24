<template lang="pug">
nav.navbar.glonavi-header(role="navigation" aria-label="main navigation")
  .navbar-brand
    NuxtLink(:to="'/'")
      img.navbar-item.p-1#logoImg(src="/favicon.ico" alt="サービスのロゴ")

    .navbar-burger.pr-4(:class="{'is-active':bugerActive}" v-on:click="bugerClick")
      span
      span
      span
    
  //- PCのみ
  .navbar-menu
    .navbar-start
        
    .navbar-end
      NuxtLink.navbar-item(:to="'/search'")
        button.button
          span.icon
            i.fas.fa-magnifying-glass
</template>

<script setup lang="ts">
const UserStore = useUserStore();

const bugerActive = ref(false);
function bugerClick() {
  bugerActive.value = !bugerActive.value;
  // console.log(active.value);
}
function closeBuger() {
  bugerActive.value = false;
  // console.log(active.value);
}
</script>

<style lang="scss" scoped>
.glonavi-header {
  background: #fff;
  width: 100%;
  // height: 60%;
}
#logoImg {
  height: 56px;
}
</style>
