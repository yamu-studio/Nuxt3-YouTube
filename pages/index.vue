<template lang="pug">
#homeView
  .tabs.content-row-space-left.p-3.m-0.janruTab
    button.button.is-small.mr-3(v-for="janru in janruList" :key="janru.cd" :class="[janru.cd == nowJanru ? 'is-black':'is-light']" @click="filterMovie(janru.cd)") {{ janru.title }}
    
  ul.columns.is-multiline.p-4.pt-6
    li.column.is-one-third(v-for="mv in TopMovieList")
      MovieCard(:movie="mv")

</template>

<script setup lang="ts">
const { getMovies } = useMovies();
definePageMeta({
  middleware: "check-auth",
});

const nowJanru = ref(-1);
const janruList = [
  { title: "すべて", cd: -1 },
  { title: "ゲーム", cd: 0 },
  { title: "ライブ", cd: 1 },
  { title: "音楽", cd: 2 },
  { title: "ミックス", cd: 3 },
];

async function filterMovie(cd: number) {
  nowJanru.value = cd;
  TopMovieList.value = ref(await getMovies(nowJanru.value));
}

const TopMovieList = ref(await getMovies());
</script>

<style lang="scss" scoped>
#homeView {
  min-height: 88vh;
}
.janruTab {
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: white;
}
</style>
