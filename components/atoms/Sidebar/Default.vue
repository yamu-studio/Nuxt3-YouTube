<template lang="pug">
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

</template>

<script setup lang="ts"></script>

<style scoped>
/* サイドバー編 */
#sidebar {
  width: 72px;
}
</style>
