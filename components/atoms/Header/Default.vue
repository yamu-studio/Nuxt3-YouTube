<template lang="pug">
//- ヘッダー
nav.navbar.content-row-space-between.px-4
  //- 左側
  .content-row-space-left
    .navbar-item.navbar-burger
      span
      span
      span
      span
    NuxtLink.navbar-item(to="/")
      img(src="/logo_yp.png")

  //- 真ん中
  .content-row-space-center
    .navbar-item
      input.input.rounded-content-left(placeholder="検索")
      button.button.rounded-content-right#searchBtn
        span.icon
          i.fas.fa-lg.fa-magnifying-glass
    .navbar-item
      button.button.is-light.is-rounded
        span.icon
          i.fas.fa-lg.fa-microphone

  //- 右側
  .content-row-space-right
    .navbar-item
      button.button.is-light.is-rounded
        span.icon
          i.fas.fa-lg.fa-plus
        span 作成
    .navbar-item
      button.button.is-white.is-rounded
        span.icon
          i.far.fa-lg.fa-bell
    .navbar-item
      button.button.is-rounded.p-2#channelThumbnail
        img(src="/channels/thumbnail_1.png")

</template>

<script setup lang="ts"></script>

<style scoped>
.navbar-item {
  gap: 0px;
}

#searchBtn {
  width: 64px;
}

#channelThumbnail {
  height: 48px;
  width: 48px;
}
</style>
