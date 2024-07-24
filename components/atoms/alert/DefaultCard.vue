<template lang="pug">
NuxtLink
  .alertCard.content.content-row-space-top-left.pt-1
    figure.image.is-48x48.m-2
      img.is-rounded(:src="alert.channel.thumbnail")
    .alertContent.has-text-left
      p.subtitle.is-size-7 {{ alert.content }}
      p.subtitle.is-7.has-text-grey.m-0 {{ commonDateAgo(alert.createdAt) }}
    figure.image.rounded-content.m-2#alertThumbnail
      img(:src="alert.movie.thumbnail")
    button.button.is-small.is-white#hiddenBtn
      span.icon
        i.fas.fa-ellipsis-vertical
</template>

<script setup lang="ts">
const props = defineProps<{
  alert: any;
}>();
</script>

<style lang="scss" scoped>
.alertCard {
  width: 100%;
}

.alertContent {
  width: 60%;
}
#alertThumbnail {
  width: 64px;
}
#hiddenBtn {
  color: rgba(255, 255, 255, 0);

  :hover {
    color: black;
  }
}
</style>
