<template lang="pug">
.content-row-space-left.p-1.active-flex-cut-max-length 
  figure.image.is-32x32
    img.is-rounded(:src="ch.thumbnail")
  p.is-size-7.cut-max-length.m-0.pl-4.chCardName {{ ch.name }}

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
