<template lang="pug">
.content-row-space-left.p-1 
  figure.image.is-32x32
    img.is-rounded(:src="ch.thumbnail")
  p.subtitle.is-size-7.cutMaxLength.m-0.pl-4.chCardName {{ ch.name }}

</template>

<script setup lang="ts">
const props = defineProps<{
  ch: any;
}>();
</script>

<style lang="scss" scoped>
.chCardName {
  max-width: 82%;
}
</style>
