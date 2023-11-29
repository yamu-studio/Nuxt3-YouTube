<template lang="pug">
aside.is-narrow-mobile.is-fullheight.is-hidden-mobile#mainSideber
  //- .has-background-dark
  ul.menu-list

    li.pt-3
      NuxtLink.p-1(:to="'#'" class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)")
        span.icon
          i.fas.fa-lg.fa-solid.fa-house
        p Home

    li.pt-3
      NuxtLink.p-1(:to="'#'" class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)")
        span.icon
          i.fas.fa-lg.fa-regular.fa-circle-play
        p ショート

    li.p-1
      NuxtLink.p-1(:to="'#'" class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)")
        span.icon
          i.fas.fa-lg.fa-solid.fa-tv
        p 登録チャンネル

    li.p-1
      NuxtLink.p-1(:to="'#'" class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)")
        span.icon
          i.fas.fa-lg.fa-solid.fa-photo-film
        p マイページ


</template>

<script>
export default {
  data() {
    return {
      activeNum: 0,
    };
  },
  methods: {
    changeActiveLink(n) {
      this.activeNum = n;
    },
  },
};
</script>

<style lang="scss" scoped>
#mainSideber {
  width: 68px;
  p {
    font-size: 10px;
  }
}
</style>
