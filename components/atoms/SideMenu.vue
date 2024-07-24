<template lang="pug">
.modal.is-active(v-if="bugerActive")
  .modal-background(@click="bugerClick")
  .modal-content#modalMainSideber.p-3
    .content-row-space-left#sideBrand
      .navbar-item.navbar-burger.m-2(:class="{'is-active':!bugerActive}" @click="bugerClick")
        span
        span
        span
      .navbar-item
        NuxtLink(:to="'/'")
          img(src="/logo_yp.png")

    .menu.scrollView#profileLinkList
      ul.menu-list.border-bottom-light.m-3
        li
          NuxtLink
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-regular.fa-house
              p.subtitle.is-size-7.m-0.pl-5 ホーム
        li
          NuxtLink
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-regular.fa-circle-play
              p.subtitle.is-size-7.m-0.pl-5 ショート
        li
          NuxtLink
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-tv
              p.subtitle.is-size-7.m-0.pl-5 登録チャンネル
        
    .menu.scrollView#profileLinkList
      ul.menu-list.border-bottom-light.m-3
        li
          NuxtLink.p-2
            .content-row-space-left 
              p.subtitle.is-size-7.m-0 マイページ 
              span.icon
                i.fas.fa-lg.fa-solid.fa-angle-right
        li
          NuxtLink.p-2
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-regular.fa-address-card
              p.subtitle.is-size-7.m-0.pl-4 登録チャンネル

    .menu.scrollView#profileLinkList
      p.menu-label 登録チャンネル
      ul.menu-list.border-bottom-light.m-3
        li(v-for="ch in subscedChannelList" :key="ch.channelID")
          NuxtLink
            AtomsChannelDefaultCard(:ch="ch")
              

.sidebar.is-fullheight.is-hidden-mobile
  .scrollView#profileLinkList
    ul.border-bottom-light.m-1
      li.has-text-centered
        NuxtLink.has-text-black.active-flex-cut-max-length.p-1(:to="'#'" @click="changeActiveLink(0)")
          span.icon
            i.fas.fa-lg.fa-house(:class="[activeNum == 0 ? 'fa-solid':'fa-regular']")
          p.is-size-7.cut-max-length ホーム

      li.has-text-centered
        NuxtLink.has-text-black.active-flex-cut-max-length.p-1(:to="'#'" @click="changeActiveLink(1)")
          span.icon
            i.fas.fa-lg.fa-circle-play(:class="[activeNum == 1 ? 'fa-solid':'fa-regular']")
          p.is-size-7.cut-max-length ショート

      li.has-text-centered
        NuxtLink.has-text-black.active-flex-cut-max-length.p-1(:to="'#'" @click="changeActiveLink(2)")
          span.icon
            i.fas.fa-lg.fa-tv(:class="[activeNum == 2 ? 'fa-solid':'fa-regular']")
          p.is-size-7.cut-max-length 登録チャンネル

      li.has-text-centered
        NuxtLink.has-text-black.active-flex-cut-max-length.p-1(:to="'#'" @click="changeActiveLink(3)")
          span.icon
            i.fas.fa-lg.fa-photo-film(:class="[activeNum == 3 ? 'fa-solid':'fa-regular']")
          p.is-size-7.cut-max-length マイページ


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
    thumbnail: "/channels/channelImg.png",
    name: "チャンネル名１",
  },
  {
    channelID: 2,
    thumbnail: "/channels/channelImg.png",
    name: "チャンネル名２チャンネル名２",
  },
  {
    channelID: 3,
    thumbnail: "/channels/channelImg.png",
    name: "チャンネル名３チャンネル名３チャンネル名３",
  },
  {
    channelID: 4,
    thumbnail: "/channels/channelImg.png",
    name: "チャンネル名４",
  },
  {
    channelID: 5,
    thumbnail: "/channels/channelImg.png",
    name: "チャンネル名５チャンネル名５",
  },
  {
    channelID: 6,
    thumbnail: "/channels/channelImg.png",
    name: "チャンネル名６チャンネル名６",
  },
  {
    channelID: 7,
    thumbnail: "/channels/channelImg.png",
    name: "チャンネル名７チャンネル名７チャンネル名７",
  },
];
</script>

<style lang="scss" scoped>
#sideBrand {
  height: 68px;
  img {
    width: 120px;
  }
}

#openedSideber {
  min-width: 120px;
}
#mainSideber {
  // width: 68px;
  p {
    font-size: 10px;
  }
}
// .modal,
// .modal-background,
// .modal-content {
//   z-index: 20;
// }
#modalMainSideber {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: white;
  width: 240px;
  min-height: 100%;
}
</style>
