<template lang="pug">
#homeView
  .tabs.content-row-space-left.p-3.m-0.janruTab
    button.button.is-small.mr-3(v-for="janru in janruList" :key="janru.cd" :class="[janru.cd == nowJanru ? 'is-black':'is-light']") {{ janru.title }}
    
  ul.columns.is-multiline.p-4.pt-6
    li.column.is-one-third(v-for="mv in TopMovieList")
      MovieCard(:movie="mv")

</template>

<script setup lang="ts">
const janruList = [
  { title: "すべて", cd: 0 },
  { title: "ゲーム", cd: 1 },
  { title: "ライブ", cd: 2 },
  { title: "音楽", cd: 3 },
  { title: "ミックス", cd: 4 },
];

const nowJanru = ref(0);

// AIPから取得ならこんな感じ
// const TopMovieList = ref([]);
// const { data, error } = await useFetch(
//   ここurl,
//   {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: {
//       パラメーター
//     },
//   }
// );
// if (!error.value) {
//   TopMovieList.value = data.value.~~
// }

const TopMovieList = [
  {
    movieID: 1,
    title:
      "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
    movie: "/movies/movie_1.mp4",
    thumbnail: "/movies/thumbnail_1.png",
    views: 33000,
    publishedAt: new Date("2023-11-01 12:15:01"),
    channel: {
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "channelImg.png",
    },
  },
  {
    movieID: 2,
    title:
      "タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２",
    movie: "/movies/movie_2.mp4",
    thumbnail: "/movies/thumbnail_2.png",
    views: 11289019,
    publishedAt: new Date("2023-01-01 9:15:01"),
    channel: {
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "channelImg.png",
    },
  },
  {
    movieID: 3,
    title:
      "タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３",
    movie: "/movies/movie_1.mp4",
    thumbnail: "/movies/thumbnail_3.png",
    views: 827365189,
    publishedAt: new Date("2023-11-30 11:15:01"),
    channel: {
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "channelImg.png",
    },
  },
  {
    movieID: 4,
    title:
      "タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４",
    movie: "/movies/movie_2.mp4",
    thumbnail: "/movies/thumbnail_4.png",
    views: 9810,
    publishedAt: new Date("2000-01-01 10:15:01"),
    channel: {
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "channelImg.png",
    },
  },
  {
    movieID: 5,
    title:
      "タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５",
    movie: "/movies/movie_1.mp4",
    thumbnail: "/movies/thumbnail_5.png",
    views: 33000,
    publishedAt: new Date("2022-3-01 12:15:01"),
    channel: {
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "channelImg.png",
    },
  },
  {
    movieID: 6,
    title:
      "タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６",
    movie: "/movies/movie_2.mp4",
    thumbnail: "/movies/thumbnail_6.png",
    views: 11289019,
    publishedAt: new Date("2023-11-01 10:15:01"),
    channel: {
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "channelImg.png",
    },
  },
];
</script>

<style lang="scss" scoped>
#homeView {
  min-height: 88vw;
}
.janruTab {
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: white;
}
</style>
