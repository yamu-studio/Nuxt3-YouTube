<template lang="pug">
.modalBack(v-if="bugerActive")
  .modal-background(@click="bugerClick")
  .modal-content#modalMainSideber
    .content-row-space-left
      .navbar-item.navbar-burger.m-2(:class="{'is-active':!bugerActive}" @click="bugerClick")
        span
        span
        span
      .navbar-item
        NuxtLink(:to="'/'")
          img.image(src="/logo_yp.png")

    ul.menu-list.border-bottom-light.m-3
      li.pl-3.pr-3
        NuxtLink.p-2
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-regular.fa-house
            p.subtitle.is-size-7.m-0.pl-5 ホーム

      li.pl-3.pr-3
        NuxtLink.p-2
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-regular.fa-circle-play
            p.subtitle.is-size-7.m-0.pl-5 ショート

      li.pl-3.pr-3
        NuxtLink.p-2
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-tv
            p.subtitle.is-size-7.m-0.pl-5 登録チャンネル
        
    ul.menu-list.border-bottom-light.m-3
      li.pl-3.pr-3
        NuxtLink.p-2
          .content-row-space-left 
            p.subtitle.is-size-7.m-0 マイページ 
            span.icon
              i.fas.fa-lg.fa-solid.fa-angle-right

      li.pl-3.pr-3
        NuxtLink.p-2
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-regular.fa-address-card
            p.subtitle.is-size-7.m-0.pl-4 登録チャンネル

    p.title.is-size-7.pt-3 登録チャンネル
    ul.m-3
      li.pl-3.pr-3(v-for="ch in subscedChannelList" :key="ch.channelID")
        NuxtLink
          ChannelCard(:ch="ch")
            

aside.sidebar.is-fullheight.is-hidden-mobile#mainSideber
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
const props = defineProps<{
  bugerActive: boolean;
}>();
interface Emits {
  (e: "update:bugerActive", value: any): void;
}
const emit = defineEmits<Emits>();

function bugerClick() {
  emit("update:bugerActive", !props.bugerActive);
}

const activeNum = ref(0);

function changeActiveLink(n: number) {
  activeNum.value = n;
}

const subscedChannelList = [
  {
    channelID: 1,
    thumbnail: "/channelImg.png",
    name: "チャンネル名１",
  },
  {
    channelID: 2,
    thumbnail: "/channelImg.png",
    name: "チャンネル名２チャンネル名２",
  },
  {
    channelID: 3,
    thumbnail: "/channelImg.png",
    name: "チャンネル名３チャンネル名３チャンネル名３",
  },
  {
    channelID: 4,
    thumbnail: "/channelImg.png",
    name: "チャンネル名４",
  },
  {
    channelID: 5,
    thumbnail: "/channelImg.png",
    name: "チャンネル名５チャンネル名５",
  },
  {
    channelID: 6,
    thumbnail: "/channelImg.png",
    name: "チャンネル名６チャンネル名６",
  },
  {
    channelID: 7,
    thumbnail: "/channelImg.png",
    name: "チャンネル名７チャンネル名７チャンネル名７",
  },
];
</script>

<style lang="scss" scoped>
#openedSideber {
  min-width: 120px;
}
.sidebar {
  position: fixed;
  top: 70px;
  order: 1;
}
#mainSideber {
  width: 68px;
  p {
    font-size: 10px;
  }
}
#modalMainSideber {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: white;
  width: 240px;
  min-height: 100%;
}
</style>
