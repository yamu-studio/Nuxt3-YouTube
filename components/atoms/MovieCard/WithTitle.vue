<template lang="pug">
.video-card
  .thumbnail
    img(:src="movie.thumbnail" alt="Thumbnail")
    p.is-size-7.px-1#movie-time {{ formatMovieTime(movie.time) }}
  .info
    p.title.is-6#movieTitle {{ movie.title }}
    p.help.has-text-grey.m-0#channelName {{ movie.channel.name }}
    p.help.has-text-grey.m-0 {{ formatMillBillUnit(movie.viewCount) }} 回視聴・{{ formatDateAgo(movie.publishedAt) }}
  
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();
</script>

<style scoped>
.video-card {
  display: flex;
  gap: 10px;
}

.thumbnail {
  position: relative;
  width: 160px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#movieThumbnail {
  width: 168px;
  height: 94px;
}
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

#movie-time {
  position: absolute;
  bottom: 8px;
  right: 6px;

  color: white;
  background-color: rgba(31, 31, 31, 0.759);
  border-radius: 4px;
}
</style>
