<template lang="pug">
NuxtLink(:to="`/watch?v=${movie.movieID}`")
  .card-image
    figure.image.is-16by9
      img(:src="movie.thumbnail" alt="Thumbnail")

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
    p.subtitle.is-7.has-text-grey.m-0 {{ $common.millBillUnit(movie.views) }} 回視聴・{{ $common.dateAgo(movie.publishedAt) }}

</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();
</script>
