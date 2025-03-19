<template lang="pug">
//- ヘッダー
AtomsHeaderDefault

.container.is-fullhd.p-3
  .columns
    .column.is-8
      video.rounded-content(
        id="movieBox"
        controls
        v-if="movieData.movie != null && movieData.movie != ''"
        v-on:loadedmetadata="loadingMovie()"
        v-on:play="onPlay()"
        v-on:pause="onPause()"
        v-on:ended="onEnded()"
        controlsList="nodownload"
        oncontextmenu="return false;"
        playsinline)
        source(
          :src="movieData.movie"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"')

      .has-text-left.p-3
        p.title.is-5 {{ movieData.title }}
        .content-row-space-between
          .content-row-space-left#channelOwnerInfo
            figure.image.is-32x32.m-1
              img.is-rounded(:src="movieData.channel.thumbnail")
            NuxtLink.has-text-left(:to="`/channel/${movieData.channel.channelID}`")
              p.title.is-size-7.cut-max-length#movieChannelName {{ movieData.channel.name }}
              p.subtitle.is-size-7 チャンネル登録者数 {{ formatMillBillUnit(movieData.channel.subscribers) }}人
            button.button.is-black.is-rounded.p-2 チャンネル登録

          .content-row-space-right 
            button.button.is-light.rounded-content-left
              span.icon
                i.fa-lg.fa-regular.fa-thumbs-up
              span {{ formatMillBillUnit(movieData.goods) }}
            button.button.is-light.rounded-content-right
              span.icon
                i.fa-lg.fa-regular.fa-thumbs-down
            button.button.is-light.is-rounded.m-1
              span.icon
                i.fa-lg.fas.fa-share
              span 共有
            button.button.is-light.is-rounded.m-1
              span.icon
                i.fas.fa-lg.fa-solid.fa-ellipsis

      .div.has-text-left.has-background-light.rounded-content.p-3(v-if="isOpenDescription")
        .content-row-space-left 
          p.subtitle.is-size-7.m-0.pr-2 {{ movieData.views.toLocaleString() }} 回再生
          p.subtitle.is-size-7.m-0.pr-2 {{ formatDateAgo(movieData.publishedAt) }}
          NuxtLink.is-size-7.m-0.pr-2(v-for="tag in movieData.hashTags" :to="`/hashtag/${tag}`") &#035;{{ tag }}
        p.subtitle.is-size-7.pt-2.mb-0 {{ movieData.description }} 
        .content-row-space-left 
          figure.image.is-96x96.m-1
            img.is-rounded(:src="movieData.channel.thumbnail")
          .has-text-left
            p.title.is-size-7 {{ movieData.channel.name }}
            p.subtitle.is-size-7 チャンネル登録者数 {{ formatMillBillUnit(movieData.channel.subscribers) }}人
        .content-row-space-between-center
          button.button.is-black.is-outlined.is-rounded.mr-2
            span.icon
              i.fa-lg.fas.fa-clapperboard
            span 動画
          button.button.is-black.is-outlined.is-rounded
            span.icon
              i.fa-lg.far.fa-user
            span 概要
        p.subtitle.is-size-7.mt-6(@click="changeOpenDescription") 一部を表示

      .div.has-text-left.has-background-light.is-rounded.p-3(v-else @click="changeOpenDescription")
        .content-row-space-left 
          p.subtitle.is-size-7.m-0.pr-2 {{ movieData.views.toLocaleString() }} 回再生
          p.subtitle.is-size-7.m-0.pr-2 {{ formatDateAgo(movieData.publishedAt) }}
          NuxtLink.subtitle.is-size-7.has-text-grey.m-0.pr-2(v-for="tag in movieData.hashTags" :to="`/hashtag/${tag}`") {{ tag }}
        p.subtitle.is-size-7.pt-2.mb-0#movieDescription {{ movieData.description }} 
        p.subtitle.is-size-7.pt-1 ...もっと見る

      .div.has-text-left.p-3
        .content-row-space-left
          p.has-text-weight-bold.is-size-4 {{ movieData.comments.toLocaleString() }} 件のコメント
          button.button.is-white 
            span.icon
              i.fa-solid.fa-arrow-down-wide-short
            span 並び替え

        .content-row-space-left
          figure.image.is-32x32.mr-3
            img.is-rounded(src="/channels/thumbnail_1.png")
          .is-flex-fill
            input.commentInput(v-model="commentText" placeholder="コメントする...")
            .content-row-space-between 
              button.button.is-white 
                span.icon
                  i.fa-solid.fa-regular.fa-face-laugh-beam
              .content-row-space-right 
                button.button.is-rounded.is-white.m-2 キャンセル
                button.button.is-rounded.m-2(:class="[commentText != '' ? 'is-link' : 'is-light']" @click="sendComment" :disabled="commentText == ''") コメント

      //- コメント
      AtomsCommentCardDefault(v-for="comment in commentList" :comment="comment")
      
    .column.is-4
      //- 広告 → ベタ書きした
      .card
        .card-image
          img#adCard(:src="adData.thumbnail")
        .content-row-space-between
          .content-row-space-left
            figure.image.is-32x32.m-3
              img.is-rounded(:src="adData.sponsor.thumbnail")
            .has-text-left
              p.subtitle.is-6 {{ adData.title }}
              p.title.is-size-7 スポンサー・
                | {{ adData.sponsor.link }}
          .content-row-space-right 
            button.button.is-link.is-rounded.p-2.m-3 詳細を確認
            button.button.is-white.is-rounded 
              i.fa-solid.fa-regular.fa-ellipsis-vertical
              
      ul.columns.is-multiline.pt-2
        li.column.is-full(v-for="movie in TopMovieList")
          NuxtLink(:to="`/watch?v=${movie.movieID}`")
            AtomsMovieCardSimple(:movie="movie")

</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  layout: "full-window",
});

// デフォで置いておく(DBは作ってない)
const adData = ref({
  adID: 2,
  title: "好評受付中！",
  link: "www.example.com/12345",
  thumbnail: "/movies/thumbnail_1.png",
  publishedAt: new Date("2023-01-01 9:15:01"),
  sponsor: {
    sponsorlID: 1,
    name: "スポンサー１スポンサー１スポンサー１",
    thumbnail: "/channels/thumbnail_1.png",
    link: "www.example.com",
  },
});

const movieID = route.query.v != undefined ? route.query.v : null;
const startSeconds =
  route.query.s != undefined && isFinite(route.query.s)
    ? Number(route.query.s)
    : 0;

const isOpenDescription = ref(false);
function changeOpenDescription() {
  isOpenDescription.value = !isOpenDescription.value;
}

const isLoading = ref(true);
const movieData = await useGetMovieById(movieID);
const commentList = await useGetComments(movieID);
const TopMovieList = await useGetMovies();

const commentText = ref("");
async function sendComment() {
  console.log(commentText.value);
}

async function addViewdeMovieHistory(
  viewdeSeconds: number,
  isFinish: boolean = false
) {
  // 視聴履歴を保存・更新する
  // →次回以降で解説
  // useAddViewdeMovieHistory(movieID, viewdeSeconds, isFinish);
}

// 動画設定
function loadingMovie() {
  // 音量を制御
  var videoElem: any = document.getElementById("movieBox");
  videoElem.volume = 0.1;
  videoElem.currentTime = startSeconds;
}
function onPlay() {
  var videoElem: any = document.getElementById("movieBox");
  // 動画履歴に追加
  addViewdeMovieHistory(Math.floor(videoElem.currentTime));
}
function onPause() {
  var videoElem: any = document.getElementById("movieBox");
  // 動画履歴に追加
  addViewdeMovieHistory(Math.floor(videoElem.currentTime));
}
function onEnded() {
  console.log(3);

  var videoElem: any = document.getElementById("movieBox");
  // 動画履歴に追加
  addViewdeMovieHistory(Math.floor(videoElem.currentTime), true);
}
</script>

<style scoped>
#adCard {
  height: 60px;
  width: 100%;
  object-fit: cover;
}
#movieChannelName {
  max-width: 200px;
}
#movieDescription {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.commentInput {
  border: none;
  outline: none;
  border-bottom: 2px solid #999;
  padding: 8px 6px;
  width: 100%;
}
.commentInput:focus {
  border-bottom-color: #000000;
}
</style>
