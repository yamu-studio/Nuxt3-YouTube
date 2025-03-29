<template lang="pug">
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

const { movies: movieList } = await useGetMovies();

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

<style scoped></style>
