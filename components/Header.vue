<template lang="pug">
header#mainHeader
  nav.navbar.pb-2.content-row-space-between
    .content-row-space-left
      .navbar-item.navbar-burger(:class="{'is-active':bugerActive}" @click="bugerClick")
        span
        span
        span
      .navbar-item
        NuxtLink(:to="'/'")
          img.image(src="/logo_yp.png")
      
    .content-row-space-left
      .navbar-item.control.has-icons-right
        input.input#inputLeftRounded(placeholder="検索")
        button.button#searchLightRounded
          span.icon
            i.fas.fa-lg.fa-solid.fa-magnifying-glass
      .navbar-item
        button.button.is-rounded
          span.icon
            i.fas.fa-lg.fa-solid.fa-microphone

    .content-row-space-left
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
const props = defineProps<{
  bugerActive: boolean;
}>();

interface Emits {
  (e: "update:bugerActive", value: any): void;
}
const emit = defineEmits<Emits>();

function bugerClick() {
  emit("update:bugerActive", !props.bugerActive);
}
</script>

<style lang="scss" scoped>
#mainHeader {
  position: fixed;
  height: 70px;
  width: 100%;
  z-index: 99990;
}
#inputLeftRounded {
  border-radius: 40px 0 0 40px;
}
#searchLightRounded {
  border-radius: 0 40px 40px 0;
  width: 64px;
}
</style>
