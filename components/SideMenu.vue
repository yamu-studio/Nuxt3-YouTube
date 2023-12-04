<template lang="pug">
aside.menu.is-narrow-mobile.is-fullheight#openedSideber(v-if="bugerActive")
  ul.menu-list.border-bottom-light
    li.pl-3.pr-3
      NuxtLink.p-2
        .content-row-space-left 
          span.icon
            i.fas.fa-lg.fa-solid.fa-house
          p.subtitle ホーム

    li.pl-3.pr-3
      NuxtLink.p-2
        .content-row-space-left 
          span.icon
            i.fas.fa-lg.fa-circle-play
          p.subtitle ショート

    li.pl-3.pr-3
      NuxtLink.p-2
        .content-row-space-left 
          span.icon
            i.fas.fa-lg.fa-tv
          p.subtitle 登録チャンネル
      
  ul.menu-list.border-bottom-light
    li
      NuxtLink.p-1
        .content-row-space-left 
          span.icon
            i.fas.fa-lg.fa-tv
          p.subtitle マイページ 

aside.is-fullheight.is-hidden-mobile#mainSideber(v-else)
  ul.menu-list
    li.pt-5
      NuxtLink.p-1(:to="'#'" @click="changeActiveLink(0)")
        span.icon
          i.fas.fa-lg.fa-house(:class="[activeNum == 0 ? 'fa-solid':'fa-regular']")
        p ホーム

    li.pt-5
      NuxtLink.p-1(:to="'#'" @click="changeActiveLink(1)")
        span.icon
          i.fas.fa-lg.fa-circle-play(:class="[activeNum == 1 ? 'fa-solid':'fa-regular']")
        p ショート

    li.pt-5
      NuxtLink.p-1(:to="'#'" @click="changeActiveLink(2)")
        span.icon
          i.fas.fa-lg.fa-tv(:class="[activeNum == 2 ? 'fa-solid':'fa-regular']")
        p 登録チャンネル

    li.pt-5
      NuxtLink.p-1(:to="'#'" @click="changeActiveLink(3)")
        span.icon
          i.fas.fa-lg.fa-photo-film(:class="[activeNum == 3 ? 'fa-solid':'fa-regular']")
        p マイページ


</template>

<script setup lang="ts">
const bugerActive = ref(false);
const activeNum = ref(0);

function changeActiveLink(n: number) {
  activeNum.value = n;
}
</script>

<style lang="scss" scoped>
#openedSideber {
  min-width: 120px;
}
#mainSideber {
  width: 68px;
  p {
    font-size: 10px;
  }
}
</style>
