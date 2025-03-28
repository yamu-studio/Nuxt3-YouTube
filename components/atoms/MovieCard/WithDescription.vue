<template lang="pug">
#movieCard
  #movieThumbnail 
    img(:src="movie.info.thumbnailUrl" alt="Thumbnail")
    p.is-size-7.px-1#movieTime {{ formatMovieTime(movie.timeLongth) }}
  #movieInfo
    p.title.is-5.m-0#movieTitle {{ movie.info.title }}
    p.help.has-text-grey.my-1 {{ formatMillBillUnit(movie.insight.viewCount) }} 回視聴・{{ formatDateAgo(new Date(movie.info.publishAt)) }}
    .content-row-space-left.py-3
      figure.image.is-32x32.is-no-shrink
        img.is-rounded(:src="movie.channel.info.thumbnailUrl" alt="Channel image")
      p.help.has-text-grey.mx-2#channelName {{ movie.channel.info.name }}
    p.help.has-text-grey.m-0#movieDescription {{ movie.info.description }}
  
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();
</script>

<style scoped>
#movieCard {
  display: flex;
  gap: 10px;
}

#movieThumbnail {
  position: relative;
  max-width: 500px;
  min-width: 240px;
  border-radius: 8px;
  overflow: hidden;
}

#movieInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#movieTitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

#movieDescription {
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
