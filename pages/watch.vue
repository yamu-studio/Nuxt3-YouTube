<template lang="pug">
#channelView
  .tile.is-ancestor.p-3(v-if="!isLoading")
    .tile.is-parent.is-vertical.is-8
      .is-child
        .content
          video.contentRounded(
            id="movieBox"
            controls
            v-if="movieData.movie != null && movieData.movie != ''"
            v-on:loadedmetadata="loadingMovie()"
            v-on:play="onPlay()"
            v-on:ended="onEnded()"
            controlsList="nodownload"
            oncontextmenu="return false;"
            muted
            playsinline)
            source(
              :src="movieData.movie"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"')

      .is-child.has-text-left.p-3
        p.title.is-5 {{ movieData.title }}
        .content-row-space-between
          .content-row-space-left 
            figure.image.is-32x32.m-1
              img.is-rounded(:src="movieData.channel.thumbnail")
            .has-text-left
              p.title.is-size-7.cutMaxLength#movieChannelName {{ movieData.channel.name }}
              p.subtitle.is-size-7 チャンネル登録者数 {{ $common.millBillUnit(movieData.channel.subscribers) }}人
            button.button.is-black.is-rounded.p-2 チャンネル登録

          .content-row-space-right 
            button.button.leftRounded
              span.icon
                i.fa-lg.fa-regular.fa-thumbs-up
              span {{ $common.millBillUnit(movieData.goods) }}
            button.button.rightRounded
              span.icon
                i.fa-lg.fa-regular.fa-thumbs-down
            button.button.is-rounded.m-1
              span.icon
                i.fa-lg.fas.fa-share
              span 共有

            button.button.is-rounded.m-1
              span.icon
                i.fas.fa-lg.fa-solid.fa-ellipsis

      .is-child.has-text-left.has-background-light.contentRounded.p-3
        .content-row-space-left 
          p.subtitle.is-size-7.m-0.pr-2 {{ $common.millBillUnit(movieData.views) }}回再生
          p.subtitle.is-size-7.m-0.pr-2 {{ $common.dateAgo(movieData.publishedAt) }}
          p.subtitle.is-size-7.has-text-grey.m-0.pr-2 #ハッシュタグ #ハッシュタグ #ハッシュタグ
        p.subtitle.is-size-7 概要欄

      .is-child.has-text-left.p-3
        .content-row-space-left
          p {{ sumCommentCount.toLocaleString() }} 件のコメント
          button.button.is-white 
            span.icon
              i.fa-solid.fa-arrow-down-wide-short
            span 並び替え

        .content-row-space-left
          figure.image.is-32x32
            img.is-rounded(:src="movieData.channel.thumbnail")
          .flex-leftover 
            input.commentInput(v-model="commentText" placeholder="コメントする...")
            .content-row-space-between 
              button.button.is-white 
                span.icon
                  i.fa-solid.fa-regular.fa-face-laugh-beam
              .content-row-space-right 
                button.button.is-rounded.is-white キャンセル
                button.button.is-rounded(:class="[commentText != '' ? 'is-link' : 'is-light']" @click="sendComment") コメント

        //- コメント
        CommentCard(v-for="cm in commentList" :key="cm.commentID" :cm="cm")

    .tile.is-parent.is-vertical.p-2.pl-0
      .is-child.card
        .card-image
          img#adCard(:src="adData.thumbnail")
        .content-row-space-between-center
          .content-row-space-left
            figure.image.is-32x32.m-3
              img.is-rounded(:src="adData.sponsor.thumbnail")
            .has-text-left
              p.subtitle.is-6 {{ adData.title }}
              p.title.is-size-7 スポンサー・
                | {{ adData.sponsor.link }}
          button.button.is-link.is-rounded.p-2.m-3 詳細を確認

      .is-child.pt-2
        ul.columns.is-multiline
          li.column.is-full(v-for="mv in TopMovieList")
            MovieCard(:movie="mv")
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  layout: "full-window",
});

const adData = ref({
  adID: 2,
  title: "好評受付中！",
  link: "www.example.com/12345",
  thumbnail: "/movies/thumbnail_2.png",
  publishedAt: new Date("2023-01-01 9:15:01"),
  sponsor: {
    sponsorlID: 1,
    name: "スポンサー１スポンサー１スポンサー１",
    thumbnail: "/channelImg.png",
    link: "www.example.com",
  },
});

const movieID = route.query.v != undefined ? route.query.v : null;
const movieData = ref({
  id: 2,
  movieID: 2,
  title:
    "タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２",
  movie: "/movies/movie_2.mp4",
  thumbnail: "/movies/thumbnail_2.png",
  views: 11289019,
  goods: 123456,
  publishedAt: new Date("2023-01-01 9:15:01"),
  channel: {
    channelID: 1,
    name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
    thumbnail: "/channelImg.png",
    subscribers: 1000,
  },
});

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

const sumCommentCount = ref(312333);
const commentList = ref([
  {
    commentID: 1,
    comment:
      "あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ",
    goods: 32112,
    publishedAt: new Date("2023-11-01 10:10:10"),
    updatedAt: new Date("2023-11-01 10:10:10"),
    channel: {
      channelID: "qwertyuio",
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
    },
  },
  {
    commentID: 2,
    comment: "おおおおおおおおおおおお",
    goods: 3,
    publishedAt: new Date("2023-11-01 10:10:10"),
    updatedAt: new Date("2023-11-05 10:10:10"),
    channel: {
      channelID: "qwertyuio",
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
    },
  },
]);

const isLoading = ref(true);

// AIPから取得ならこんな感じ
const { data: resMovData, error: resMovError } = await useFetch(
  `http://127.0.0.1:8000/movies/${movieID}`,
  {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }
);
if (!resMovError.value) {
  setDataForApi(resMovData.value, movieData.value);
} else {
  throw createError({
    statusCode: 404,
    statusMessage: "チャンネルが見つかりませんでした。",
  });
}

const { data: resMovInsghtData, error: resMovInsghtError } = await useFetch(
  `http://127.0.0.1:8000/movies/${movieData.value.id}/insight`,
  {
    method: "GET",
  }
);
if (!resMovInsghtError.value) {
  setDataForApi(resMovInsghtData.value, movieData.value);
} else {
  // スローしないがインサイト系は全て0に
}

// 動画のダウンロードはこれでいける
// →動画用サーバーのURLでやればもっと楽
onMounted(async () => {
  const response = await fetch(`http://127.0.0.1:8000/movies/${movieID}/src`);
  const blob = await response.blob();
  movieData.value.movie = URL.createObjectURL(blob);
  isLoading.value = false;
});

// 共通関数として使ってもいいが、pythonのキャメル・スネーク変換は考えておくべき...
function setDataForApi(mapData: any, outData: any) {
  // 含まれているkeyを取得
  const keys = Object.keys(mapData);
  keys.forEach((key) => {
    if (mapData[key] != undefined && outData[key] != undefined) {
      outData[key] = mapData[key];
    }
    if (key == "movie_id") {
      outData["movieID"] = mapData[key];
    } else if (key == "channel_id") {
      outData["channel"]["channelID"] = mapData[key];
    } else if (key == "created_at") {
      outData["publishedAt"] = new Date(mapData[key]);
    } else if (key == "view_count") {
      outData["views"] == mapData[key];
    } else if (key == "good_count") {
      outData["goods"] = mapData[key];
    }
  });
}

const commentText = ref("");
function sendComment() {
  console.log("ここでコメント送信処理します。");
}

// 動画設定
function loadingMovie() {
  // 音量を制御
  var videoElem: any = document.getElementById("userVideo");
  videoElem.volume = 0.1;
}
function onPlay() {
  var videoElem: any = document.getElementById("userVideo");
  videoElem.volume = 0.1;
}
function onPlays() {
  var videoElem: any = document.getElementById("userVideo");
  videoElem.volume = 0.1;
}
</script>

<style lang="scss" scoped>
#homeView {
  min-height: 88vw;
}
#movieBox {
  max-height: 480px;
}
#adCard {
  height: 60px;
  width: 100%;
  object-fit: cover;
}
#movieChannelName {
  max-width: 200px;
}

.commentInput {
  border: none;
  outline: none;
  border-bottom: 2px solid #999;
  padding: 5px 10px;
  width: 100%;
}
.commentInput:focus {
  border-bottom-color: #000000;
}
</style>
