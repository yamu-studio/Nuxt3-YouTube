<template lang="pug">
//- ヘッダー
AtomsHeaderDefault

.content-row-space-left-top
  //- サイドバー
  AtomsSidebarDefault

  //- メイン
  .width-full.px-3
    slot 
</template>

<script setup lang="ts"></script>

<style scoped></style>
