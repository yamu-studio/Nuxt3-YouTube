<template lang="pug">
.content-row-space-left-start.pt-2
  NuxtLink(:to="`/watch?v=${movie.movieID}`")
    figure.image.movieThumbnail
      img(:src="movie.thumbnail" alt="Thumbnail")
      p.is-size-7.movieTime.contentLiteRounded.px-1.py-0 {{ commonMovieTimeLong(movie.time) }}

  .px-3.has-text-left
    NuxtLink(:to="`watch?v=${movie.movieID}`")
      p.subtitle.is-6.m-0.mb-2 {{ movie.title  }}
    p.subtitle.is-7.has-text-grey.m-0 {{ commonMillBillUnit(movie.views) }} 回視聴・{{ commonDateAgo(movie.publishedAt) }}

    .content-row-space-left.py-2
      figure.image.is-32x32
        img.is-rounded(:src="movie.channel.thumbnail" alt="Channel image")
      NuxtLink(:to="`/channel/${movie.channel.channelID}`")
        p.subtitle.is-7.has-text-grey.pl-2.m-0 {{ movie.channel.name }}
    
    p.subtitle.is-7.has-text-grey.m-0 {{ commonCutWordLengthStr(movie.description,120) }}
  
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();
</script>

<style lang="scss" scoped>
.movieThumbnail {
  width: 360px;
}

.movieTime {
  position: absolute;
  bottom: 2px;
  right: 6px;

  color: white;
  background-color: rgba(31, 31, 31, 0.759);
}
</style>
