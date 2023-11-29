<template lang="pug">
.card-image
  figure.image.is-16by9
    img(src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image")

.media.pt-2
  .media-left
    figure.image.is-32x32
      img.is-rounded(src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image")

  .media-content.has-text-left
    p.subtitle.is-6.m-0.mb-2 タイトル１タイトル１タイトル１タイトル１タ
    p.subtitle.is-7.has-text-grey.m-0 チャンネル名１チャンネル名１チャンネル名１
    p.subtitle.is-7.has-text-grey.m-0 0 回視聴・7時間前

</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();
</script>
