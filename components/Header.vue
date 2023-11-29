<template lang="pug">
header.glonavi-header#mainHeader
  nav.navbar.newHeader1(role="navigation" aria-label="main navigation")
    .navbar-brand
      
      .navbar-item.navbar-burger(:class="{'is-active':bugerActive}" v-on:click="bugerClick")
        span
        span
        span

      .navbar-item
        NuxtLink(:to="'/'")
          img.image.is-48x48(src="/favicon.ico")
          
    .navbar-menu
      .navbar-start
        .navbar-item 
          input.input.is-rounded
        .navbar-item
          button.button.is-rounded
            span.icon
              i.fas.fa-lg.fa-solid.fa-microphone
      .navbar-end
        .navbar-item
          button.button.is-rounded
            span.icon
              i.fas.fa-lg.fa-solid.fa-video
        .navbar-item
          button.button.is-rounded
            span.icon
              i.fas.fa-lg.fa-regular.fa-bell
        .navbar-item
          button.button.is-primary.is-inverted.is-rounded
            //- figure.image.is-48x48
            img(src="/favicon.ico")
              
          
</template>

<script setup lang="ts">
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
#mainHeader {
  height: 70px;
  width: 100vw;
  z-index: 99990;
}
</style>
