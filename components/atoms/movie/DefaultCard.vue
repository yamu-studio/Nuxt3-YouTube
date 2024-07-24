<template lang="pug">
NuxtLink(:to="`/watch?v=${movie.movieID}`")
  .card-image
    figure.image.is-16by9
      img(:src="movie.thumbnail" alt="Thumbnail")
    p.is-size-7.movieTime.contentLiteRounded.px-1.py-0 {{ commonMovieTimeLong(movie.time) }}

.media.pt-2
  
  .media-left
    NuxtLink(:to="`/channel/${movie.channel.channelID}`")
      figure.image.is-32x32
        img.is-rounded(:src="movie.channel.thumbnail" alt="Channel image")

  .media-content.has-text-left
    NuxtLink(:to="`watch?v=${movie.movieID}`")
      p.subtitle.is-6.m-0.mb-2 {{ movie.title  }}
    NuxtLink(:to="`/channel/${movie.channel.channelID}`")
      p.subtitle.is-7.has-text-grey.m-0 {{ movie.channel.name }}
    p.subtitle.is-7.has-text-grey.m-0 {{ commonMillBillUnit(movie.views) }} 回視聴・{{ commonDateAgo(movie.publishedAt) }}

</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();
</script>

<style lang="scss" scoped>
.movieTime {
  position: absolute;
  bottom: 2px;
  right: 6px;

  color: white;
  background-color: rgba(31, 31, 31, 0.759);
}
</style>
