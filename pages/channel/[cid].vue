<template lang="pug">
#channelView
  .container.is-fullhd.p-1
    figure.image
      img.contentRounded#channelBackImg(:src="channelData.backImg" alt="Channel image")
    
    .content-row-space-left-start.p-2.pt-5
      figure.image.is-128x128
        img(:src="channelData.thumbnail" alt="Channel image")
      .has-text-left
        p.title.m-0.p-2 {{ channelData.name }}
        .content-row-space-left
          p.subtitle.is-size-7.has-text-grey.m-0.p-1 @{{ channelData.accountID }}・チャンネル登録者数 {{ $common.millBillUnit(channelData.subscribers) }}人・{{ $common.millBillUnit(channelData.movies) }} 本の動画
        
        .content-row-space-left
          button.button.is-white.m-1.p-0
            span.has-text-grey.is-size-7 概要欄
            span.icon.has-text-grey
              i.fas.fa-angle-right
        
        button.button.is-black.is-rounded チャンネル登録
    .tabs
      ul
        li.is-active
          NuxtLink ホーム
        li
          NuxtLink 動画
        li
          NuxtLink ショート
        li
          NuxtLink ライブ
        li
          NuxtLink 再生リスト
        li
          NuxtLink コミュニティ
    
    ul.columns.is-multiline
      li.column.is-one-third(v-for="mv in recoMovieList")
        MovieCard(:movie="mv")


</template>

<script setup lang="ts">
const channelID = useRoute().params.cid as string;

const channelData = ref({
  channelID: 1,
  accountID: "yamu-studio",
  name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
  backImg: "/channelBack.png",
  thumbnail: "/channelImg.png",
  subscribers: 1224,
  movies: 123,
});

const recoMovieList = [
  {
    movieID: 1,
    title:
      "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
    movie: "/movies/movie_1.mp4",
    thumbnail: "/movies/thumbnail_1.png",
    views: 33000,
    publishedAt: new Date("2023-11-01 12:15:01"),
    channel: {
      channelID: 1,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
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
      channelID: 2,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
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
      channelID: 3,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
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
      channelID: 4,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
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
      channelID: 5,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
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
      channelID: 6,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
    },
  },
];
</script>

<style lang="scss" scoped>
#channelView {
  min-height: 88vw;
}
#channelBackImg {
  height: 120px;
}
.tabs li.is-active a {
  border-bottom-color: hsl(0, 0%, 0%);
  color: hsl(0, 0%, 0%);
}
</style>
