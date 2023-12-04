<template lang="pug">
.card-image
  figure.image.is-16by9
    img(:src="movie.thumbnail" alt="Thumbnail")

.media.pt-2
  .media-left
    figure.image.is-32x32
      img.is-rounded(:src="movie.channel.thumbnail" alt="Channel image")

  .media-content.has-text-left
    p.subtitle.is-6.m-0.mb-2 {{ movie.title  }}
    p.subtitle.is-7.has-text-grey.m-0 {{ movie.channel.name }}
    p.subtitle.is-7.has-text-grey.m-0 {{ views }} 回視聴・{{ publishedAt }}

</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any;
}>();

const publishedAt = computed(() => {
  const nowDate = new Date();
  let diffMilliSec = nowDate.getTime() - props.movie.publishedAt.getTime();

  const diffInSecs = Math.floor(diffMilliSec / 1000);
  if (diffInSecs < 60) {
    return `${diffInSecs}秒前`;
  }

  const diffInMins = Math.floor(diffMilliSec / 1000 / 60);
  if (diffInMins < 60) {
    return `${diffInMins}分前`;
  }

  const diffInHours = Math.floor(diffMilliSec / 1000 / 60 / 60);
  if (diffInHours < 24) {
    return `${diffInHours}時間前`;
  }

  const diffInDays = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24);
  if (diffInDays < 7) {
    return `${diffInDays}日前`;
  }

  const diffInWeeks = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24 / 7);
  if (diffInWeeks < 5) {
    return `${diffInWeeks}週間前`;
  }

  const diffInMonths =
    (nowDate.getFullYear() - props.movie.publishedAt.getFullYear()) * 12 +
    (nowDate.getMonth() - props.movie.publishedAt.getMonth());

  if (diffInWeeks >= 4 && diffInMonths < 2) {
    return `1ヶ月前`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}ヶ月前`;
  }

  const diffInYears =
    nowDate.getFullYear() - props.movie.publishedAt.getFullYear();

  return `${diffInYears}年前`;
});

const views = computed(() => {
  let RoundingValue = 0;
  if (100000000 < props.movie.views) {
    RoundingValue = Math.round(props.movie.views / 10000000) / 10;
    if (10 <= RoundingValue) {
      RoundingValue = Math.round(RoundingValue);
    }
    return `${RoundingValue.toLocaleString()}億`;
  } else if (10000 < props.movie.views) {
    RoundingValue = Math.round(props.movie.views / 1000) / 10;
    if (10 <= RoundingValue) {
      RoundingValue = Math.round(RoundingValue);
    }
    return `${RoundingValue.toLocaleString()}万`;
  } else {
    return props.movie.views.toLocaleString();
  }
});
</script>
