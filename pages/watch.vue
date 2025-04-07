<template lang="pug">
.container.is-fullhd.p-3
  .columns(v-if="movieData != null")
    .column.is-8
      video.rounded-content(
        id="movieBox"
        controls
        v-if="movieData.info.movieUrl != null && movieData.info.movieUrl != ''"
        v-on:loadedmetadata="loadingMovie()"
        v-on:play="onPlay()"
        v-on:pause="onPause()"
        v-on:ended="onEnded()"
        controlsList="nodownload"
        oncontextmenu="return false;"
        playsinline)
        source(
          :src="movieData.info.movieUrl"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"')

      .has-text-left.p-3
        p.title.is-5 {{ movieData.info.title }}
        .content-row-space-between
          .content-row-space-left#channelOwnerInfo
            figure.image.is-32x32.m-1
              img.is-rounded(:src="movieData.channel.info.thumbnailUrl")
            NuxtLink.has-text-left(:to="`/channel/${movieData.channel.info.channelID}`")
              p.title.is-size-7.cut-max-length#movieChannelName {{ movieData.channel.info.name }}
              p.subtitle.is-size-7 チャンネル登録者数 {{ formatMillBillUnit(movieData.channel.insight.subscriberCount) }}人
            button.button.is-light.is-rounded.mx-2.px-4.py-2(v-if="chSubscribe" @click="channelUnSubscribe") 
              span.icon
                .fa-solid.fa-user-minus
              span 登録解除
            button.button.is-black.is-rounded.mx-2.p-2(v-else @click="channelSubscribe") チャンネル登録
    

          .content-row-space-right 
            //- ※favoriteMovieに引数(isBad)をつけるなら...
            //- button.button.is-light.rounded-content-left(@click="() => favoriteMovie(true/false)")
            button.button.is-light.rounded-content-left(@click="favoriteMovie")
              span.icon
                i.fa-lg.fa-thumbs-up(:class="[movieFavorite && !movieFavorite.is_bad?'fa-solid':'fa-regular']")
              span {{ formatMillBillUnit(movieData.insight.goodCount) }}
            button.button.is-light.rounded-content-right(@click="disFavoriteMovie")
              span.icon
                i.fa-lg.fa-thumbs-down(:class="[movieFavorite && movieFavorite.is_bad?'fa-solid':'fa-regular']")
            button.button.is-light.is-rounded.m-1
              span.icon
                i.fa-lg.fas.fa-share
              span 共有
            button.button.is-light.is-rounded.m-1
              span.icon
                i.fas.fa-lg.fa-solid.fa-ellipsis

      .div.has-text-left.has-background-light.rounded-content.p-3(v-if="isOpenDescription")
        .content-row-space-left 
          p.subtitle.is-size-7.m-0.pr-2 {{ movieData.insight.viewCount.toLocaleString() }} 回再生
          p.subtitle.is-size-7.m-0.pr-2 {{ formatDateAgo(new Date(movieData.info.publishAt)) }}
          NuxtLink.is-size-7.m-0.pr-2(v-for="tag in movieHashTagList") &#35;{{ tag }}
        p.subtitle.is-size-7.pt-2.mb-0 {{ movieData.info.description }} 
        .content-row-space-left 
          figure.image.is-96x96.m-1
            img.is-rounded(:src="movieData.channel.info.thumbnailUrl")
          .has-text-left
            p.title.is-size-7 {{ movieData.channel.info.name }}
            p.subtitle.is-size-7 チャンネル登録者数 {{ formatMillBillUnit(movieData.channel.insight.subscriberCount) }}人
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
          p.subtitle.is-size-7.m-0.pr-2 {{ movieData.insight.viewCount.toLocaleString() }} 回再生
          p.subtitle.is-size-7.m-0.pr-2 {{ formatDateAgo(new Date(movieData.info.publishAt)) }}
          NuxtLink.subtitle.is-size-7.has-text-grey.m-0.pr-2(v-for="tag in movieHashTagList") &#35;{{ tag }}
        p.subtitle.is-size-7.pt-2.mb-0#movieDescription {{ movieData.info.description }} 
        p.subtitle.is-size-7.pt-1 ...もっと見る

      .div.has-text-left.p-3
        .content-row-space-left
          p.has-text-weight-bold.is-size-4 {{ commentList.length.toLocaleString() }} 件のコメント
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
      ul.columns.is-multiline
        li.column.is-full.py-0(v-for="comment in commentList" )
          AtomsCommentCardDefault(:comment="comment")
      
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
        li.column.is-full(v-for="movie in topMovieList")
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
let startSeconds =
  route.query.s != undefined && isFinite(route.query.s)
    ? Number(route.query.s)
    : 0;

const isOpenDescription = ref(false);
function changeOpenDescription() {
  isOpenDescription.value = !isOpenDescription.value;
}

const { movie: movieData } = await useGetMovieById(movieID);

const { favorite: movieFavorite, refresh: favoriteReload } =
  await useGetFavoriteMovie(movieData.value.id);
const { subscribe: chSubscribe, refresh: chSubscribeReload } =
  await useGetSubscribeChannel(movieData.value.channel.id);

const { comments: commentList } = await useGetComments(movieData.value.id);
const { history } = await useGetMovieHistoryByMovieId(movieData.value.id);
const { movies: topMovieList } = await useGetMovies();
if (history.value) {
  startSeconds = history.value.view_second;
}

const movieHashTagList = computed(() => {
  return ["ゲーム", "初心者", "歌ってみた"];
});

function channelSubscribe() {
  useSubscribeChannel(movieData.value.channel.id)
    .then(() => {
      alert("チャンネル登録完了！");
    })
    .catch((e) => {
      alert("チャンネル登録失敗しました。");
    })
    .finally(() => chSubscribeReload());
}

function channelUnSubscribe() {
  useUnSubscribeChannel(movieData.value.channel.id)
    .then(() => {
      alert("チャンネル登録解除しました");
    })
    .catch((e) => {
      alert("チャンネル登録解除失敗しました。");
    })
    .finally(() => chSubscribeReload());
}

async function favoriteMovie() {
  if (movieFavorite.value) {
    await useUnFavoriteMoviel(movieData.value.channel.id);
    movieFavorite.value = null;
  } else {
    await useFavoriteMovie(movieData.value.channel.id);
  }
  await favoriteReload();
}

async function disFavoriteMovie() {
  if (movieFavorite.value) {
    await useUnFavoriteMoviel(movieData.value.channel.id);
    movieFavorite.value = null;
  } else {
    await useFavoriteMovie(movieData.value.channel.id, true);
  }
  await favoriteReload();
}

// ※favoriteMovieに引数(isBad)をつけてやるなら...
// async function favoriteMovie(isBad:boolean) {
//   if (movieFavorite.value) {
//     await useUnFavoriteMoviel(movieData.value.channel.id);
//     movieFavorite.value = null;
//   } else {
//     await useFavoriteMovie(movieData.value.channel.id, isBad);
//   }
//   await favoriteReload();
// }

const commentText = ref("");
async function sendComment() {
  // コメントを送信する
  useAddComment(commentText.value, movieData.value.id);
  alert("コメント送信しました");
  commentText.value = "";
}

async function addViewdeMovieHistory(
  viewdeSecond: number,
  isFinish: boolean = false
) {
  // 視聴履歴を保存・更新する
  // →次回以降で解説
  useUpdateMovieHistory(movieData.value.id, viewdeSecond, isFinish);
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
#movieBox {
  max-height: 540px;
  width: 100%;
}
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
