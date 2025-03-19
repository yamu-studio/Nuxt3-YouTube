<template lang="pug">
div
  .is-relative
    figure.image.is-16by9
      img.rounded-content(:src="movie.thumbnail" alt="Thumbnail")
    p.is-size-7.px-1#movieTime {{ formatMovieTime(movie.time) }}
  .p-1.pt-2
    .media
      .media-left
        figure.image.is-32x32
          img.is-rounded(:src="movie.channel.thumbnail" alt="Channel image")
      .media-content.content.has-text-left 
        p.title.is-6.m-0#movieTitle {{ movie.title }}
        p.help.has-text-grey.m-0#channelName {{ movie.channel.name }}
        p.help.has-text-grey.m-0 {{ formatMillBillUnit(movie.viewCount) }} 回視聴・{{ formatDateAgo(movie.publishedAt) }}
      .media-right
        button.button.is-white
          span.icon
            i.fas.fa-ellipsis-vertical
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();
</script>

<style scoped>
#movieTitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

#channelName {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

#movieTime {
  position: absolute;
  bottom: 8px;
  right: 6px;

  color: white;
  background-color: rgba(31, 31, 31, 0.759);
  border-radius: 4px;
}
</style>
