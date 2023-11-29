<template lang="pug">
#homeView
  .content-row-space-left 
    button.button.is-small.mr-3(v-for="janru in janruList" :key="janru.cd" :class="[janru.cd == nowJanru ? 'is-black':'is-light']") {{ janru.title }}
    
  ul.columns.is-multiline.p-4
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

function getMovies() {
  let list = [
    {
      movieID: 1,
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movieThumb.png",
      postAt: new Date("2000-01-01 10:15:01"),
      channel: {
        name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
        thumbnail: "/channelImg.png",
      },
    },
    {
      movieID: 1,
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movieThumb.png",
      postAt: new Date("2000-01-01 10:15:01"),
      channel: {
        name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
        thumbnail: "/channelImg.png",
      },
    },
    {
      movieID: 1,
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movieThumb.png",
      postAt: new Date("2000-01-01 10:15:01"),
      channel: {
        name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
        thumbnail: "/channelImg.png",
      },
    },
    {
      movieID: 1,
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movieThumb.png",
      postAt: new Date("2000-01-01 10:15:01"),
      channel: {
        name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
        thumbnail: "/channelImg.png",
      },
    },
    {
      movieID: 1,
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movieThumb.png",
      postAt: new Date("2000-01-01 10:15:01"),
      channel: {
        name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
        thumbnail: "/channelImg.png",
      },
    },
    {
      movieID: 1,
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movieThumb.png",
      postAt: new Date("2000-01-01 10:15:01"),
      channel: {
        name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
        thumbnail: "/channelImg.png",
      },
    },
    {
      movieID: 1,
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movieThumb.png",
      postAt: new Date("2000-01-01 10:15:01"),
      channel: {
        name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
        thumbnail: "/channelImg.png",
      },
    },
  ];

  return list;
}
const TopMovieList = ref([]);
TopMovieList.value = getMovies();
</script>

<style lang="scss" scoped>
#homeView {
  //   background-color: hsl(0, 92%, 67%);
  min-height: 88vw;
}
</style>
