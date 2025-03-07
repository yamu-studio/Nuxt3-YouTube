<template lang="pug">
//- ヘッダー
AtomsHeaderDefault

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
  .width-full.px-3
    //- ジャンルの部分
    .tags.are-normal
      span.tag.is-hoverable(v-for="janru in janruList" :class="{'is-black':janru==selectedJanru}" @click="selectJanru(janru)") {{ janru }}

    ul.columns.is-multiline
      li.column.is-one-third(v-for="movie in movieList")
        NuxtLink(:to="`/watch?v=${movie.movieID}`")
          AtomsMovieCardDefault(:movie="movie")
        
</template>

<script setup lang="ts">
// ジャンル系
const selectedJanru = ref("すべて");
const janruList = [
  "すべて",
  "ゲーム",
  "音楽",
  "ミックス",
  "ライブ",
  "ポケットモンスター",
];

function selectJanru(janru: string) {
  selectedJanru.value = janru;
}

// 動画系
const movieList = await useGetMovies();
</script>

<style scoped>
/* サイドバー編 */
#sidebar {
  width: 72px;
}
</style>
