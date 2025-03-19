<template lang="pug">
//- ヘッダー
AtomsHeaderDefault

.modal(:class="{'is-active':isOpenFilterModal}")
  .modal-background(@click="closeModal")
  .modal-content
    .box
      p 検索フィルタ
      .columns.is-mobile
        .column
          .menu
            h4.help.border-bottom-light.py-4 アップロード日
            ul.menu-list
              li.pt-2: a.is-size-7 1 時間以内
              li.pt-2: a.is-size-7 今日
              li.pt-2: a.is-size-7 今週
              li.pt-2: a.is-size-7 今月
              li.pt-2: a.is-size-7 今年
        .column
          .menu
            h4.help.border-bottom-light.py-4 タイプ
            ul.menu-list
              li.pt-2: a.is-size-7 動画
              li.pt-2: a.is-size-7 チャンネル
              li.pt-2: a.is-size-7 再生リスト
              li.pt-2: a.is-size-7 映画
        .column
          .menu
            h4.help.border-bottom-light.py-4 時間
            ul.menu-list
              li.pt-2: a.is-size-7 4 分未満
              li.pt-2: a.is-size-7 4～20 分
              li.pt-2: a.is-size-7 20 分以上
        .column
          .menu
            h4.help.border-bottom-light.py-4 特徴
            ul.menu-list
              li.pt-2: a.is-size-7 ライブ
              li.pt-2: a.is-size-7 4K
              li.pt-2: a.is-size-7 HD
              li.pt-2: a.is-size-7 字幕
              li.pt-2: a.is-size-7 クリエイティブ・コモンズ
              li.pt-2: a.is-size-7 ...
        .column
          .menu
            h4.help.border-bottom-light.py-4 並べ替え
            ul.menu-list
              li.pt-2: a.is-size-7 関連度順
              li.pt-2: a.is-size-7 アップロード日
              li.pt-2: a.is-size-7 視聴回数
              li.pt-2: a.is-size-7 評価

  button.modal-close.is-large(aria-label="close" @click="closeModal")

.content-row-space-left-top
  //- サイドバー
  ul#sidebar
    li.has-text-centered.mt-2.mb-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-house
        p.is-size-7.cut-max-length ホーム
    li.has-text-centered.my-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-circle-play
        p.is-size-7.cut-max-length ショート
    li.has-text-centered.my-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-tv
        p.is-size-7.cut-max-length 登録チャンネル
    li.has-text-centered.my-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-photo-film
        p.is-size-7.cut-max-length マイページ

  //- メイン
  .width-full.px-6
    .content-row-space-between
      //- ジャンルの部分
      .tags.are-medium
        span.tag.is-hoverable(v-for="janru in janruList" :class="[janru.cd == nowJanru ? 'is-black':'is-light']" @click="selectJanru(janru)") {{ janru.title }}

      button.button.is-white.is-rounded(@click="openFilterModal")
        span フィルタ
        span.icon
          i.fa-solid.fa-sliders
        
    ul.columns.is-multiline
      li.column.is-full(v-for="movie in movieList")
        NuxtLink(:to="`/watch?v=${movie.movieID}`")
          AtomsMovieCardWithDescription(:movie="movie")

</template>

<script setup lang="ts">
const route = useRoute();
const search_query =
  route.query.search_query != undefined ? route.query.search_query : null;

const movieList = await useGetMovies();

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
function selectJanru(janru) {
  nowJanru.value = janru.cd;
}

const isOpenFilterModal = ref(false);
function openFilterModal() {
  isOpenFilterModal.value = true;
}
function closeModal() {
  isOpenFilterModal.value = false;
}
</script>

<style scoped>
/* サイドバー編 */
#sidebar {
  width: 72px;
}
</style>
