<template lang="pug">
#resultView
  .content-row-space-between
    .tabs.content-row-space-left.p-3.m-0.janruTab
      button.button.is-small.mr-3(v-for="janru in janruList" :key="janru.cd" :class="[janru.cd == nowJanru ? 'is-black':'is-light']") {{ janru.title }}

    button.button.is-black.is-inverted.is-rounded
      span フィルタ
      span.icon
        i.fas.fa-lg.fas.fa-arrow-down-wide-short
      
  ul.columns.is-multiline.p-4.pt-2
    li.column.is-full(v-for="mv in TopMovieList")
      WideMovieCard(:movie="mv")

</template>

<script setup lang="ts">
const route = useRoute();
const search_query =
  route.query.search_query != undefined ? route.query.search_query : null;
const TopMovieList = ref([
  {
    movieID: 1,
    title:
      "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
    description:
      "概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄",
    movie: "/movies/movie_1.mp4",
    thumbnail: "/movies/thumbnail_1.png",
    views: 33000,
    time: 180,
    publishedAt: new Date("2023-11-01 12:15:01"),
    channel: {
      channelID: 1,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channels/channelImg.png",
    },
  },
  {
    movieID: 2,
    title:
      "タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２",
    description:
      "概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄",
    movie: "/movies/movie_2.mp4",
    thumbnail: "/movies/thumbnail_2.png",
    views: 11289019,
    time: 240,
    publishedAt: new Date("2023-01-01 9:15:01"),
    channel: {
      channelID: 2,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channels/channelImg.png",
    },
  },
  {
    movieID: 3,
    title:
      "タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３",
    description:
      "概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄",
    movie: "/movies/movie_1.mp4",
    thumbnail: "/movies/thumbnail_3.png",
    views: 827365189,
    time: 31,
    publishedAt: new Date("2023-11-30 11:15:01"),
    channel: {
      channelID: 3,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channels/channelImg.png",
    },
  },
  {
    movieID: 4,
    title:
      "タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４",
    description:
      "概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄",
    movie: "/movies/movie_2.mp4",
    thumbnail: "/movies/thumbnail_4.png",
    views: 9810,
    time: 3601,
    publishedAt: new Date("2000-01-01 10:15:01"),
    channel: {
      channelID: 4,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channels/channelImg.png",
    },
  },
  {
    movieID: 5,
    title:
      "タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５",
    description:
      "概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄",
    movie: "/movies/movie_1.mp4",
    thumbnail: "/movies/thumbnail_5.png",
    views: 33000,
    time: 91,
    publishedAt: new Date("2022-3-01 12:15:01"),
    channel: {
      channelID: 5,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channels/channelImg.png",
    },
  },
  {
    movieID: 6,
    title:
      "タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６",
    description:
      "概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄",
    movie: "/movies/movie_2.mp4",
    thumbnail: "/movies/thumbnail_6.png",
    views: 11289019,
    time: 440,
    publishedAt: new Date("2023-11-01 10:15:01"),
    channel: {
      channelID: 6,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channels/channelImg.png",
    },
  },
]);

const nowJanru = ref(0);
const janruList = [
  { title: "すべて", cd: 0 },
  { title: "ショート", cd: 1 },
  { title: "動画", cd: 2 },
  { title: "未再生", cd: 3 },
  { title: "視聴済み", cd: 4 },
  { title: "最近アップロードされた動画", cd: 5 },
  { title: "ライブ", cd: 6 },
];

// // AIPから取得ならこんな感じ
// const { data, error } = await useFetch(`http://127.0.0.1:8000/movies`, {
//   method: "GET",
//   headers: {
//     "content-type": "application/json",
//   },
// });
// if (!error.value) {
//   TopMovieList.value = data.value;
// }
</script>

<style lang="scss" scoped>
#resultView {
  min-height: 88vw;
}
.janruTab {
  // position: fixed;
  z-index: 10;
  // width: 100%;
  background-color: white;
}
</style>
