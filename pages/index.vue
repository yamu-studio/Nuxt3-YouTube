<template lang="pug">
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
const { movies: movieList, status } = await useGetMovies();
</script>

<style scoped></style>
