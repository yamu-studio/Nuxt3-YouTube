<template lang="pug">
header.glonavi-header#mainHeader
  nav.navbar.pb-2(role="navigation" aria-label="main navigation")
    .navbar-brand
      
      .navbar-item.navbar-burger(:class="{'is-active':bugerActive}" v-on:click="bugerClick")
        span
        span
        span

    .navbar-menu
      .navbar-start
        .navbar-item
          NuxtLink(:to="'/'")
            img.image(src="/logo_yp.png")
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
            img(src="/channelImg.png")
              
          
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
  width: 100%;
  z-index: 99990;
}
</style>
