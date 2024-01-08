<template lang="pug">
//- .modalBack(v-if="audioModalActive")
//-   .modal-background(@click="closeModal")
//-   .modal-content.pt-6
//- header#mainHeader
.card.cardModal#audioModal(v-if="audioModalActive")
  .card-content.p-2
    .content
      p 音声で検索
      p 音声で検索するには、ブラウザの設定に移動し、マイクへのアクセスを許可してください
      button.button aa

.card.cardModal#uploadModal(v-if="uploadModalActive")
  .card-content.p-1
    .content
      ul.menu-list.m-0
        ol.m-o
          NuxtLink
            .content-row-space-left 
              span.icon
                i.far.fa-lg.fa-square-caret-up.fa-rotate-90
              p.subtitle.is-size-7.m-0.pl-5 動画をアップロード
        ol.m-o
          NuxtLink
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-tower-broadcast
              p.subtitle.is-size-7.m-0.pl-5 ライブ配信を開始
        ol.m-o
          NuxtLink
            .content-row-space-left 
              span.icon
                i.far.fa-lg.fa-pen-to-square
              p.subtitle.is-size-7.m-0.pl-5 投稿を作成


.card.cardModal#alertModal(v-if="alertModalActive")
  .card-content.p-0
    .content
      .content-row-space-between-center.border-bottom-light
        p.subtitle.is-6.p-2 通知
        button.button.is-white.is-rounded
          span.icon
            i.fas.fa-gear
      //- .alertContent
      .alertContent
        AlertCard(v-for="al in alertList"  :alert="al")

.card.cardModal#profileModal(v-if="profileModalActive")
  .card-content
    .media
      .media-left
        figure.image.is-48x48
          img(src="https://bulma.io/images/placeholders/96x96.png")
      .media-content
        p.title John Smith
        p.subtitle johnsmith

    .content
      p 音声で検索
      p 音声で検索するには、ブラウザの設定に移動し、マイクへのアクセスを許可してください
      button.button aa

header#mainHeader
  nav.navbar.content-row-space-between
    .content-row-space-left
      .navbar-item.navbar-burger.m-2(:class="{'is-active':bugerActive}" @click="bugerClick")
        span
        span
        span
      .navbar-item
        NuxtLink(:to="'/'")
          img.image(src="/logo_yp.png")
      
    .content-row-space-left
      .navbar-item.control.has-icons-right
        input.input#inputLeftRounded(placeholder="検索" v-model="searchWord")
        button.button#searchLightRounded(@click="doSearch")
          span.icon
            i.fas.fa-lg.fa-solid.fa-magnifying-glass
      .navbar-item
        button.button.is-light.is-rounded(@click="visibleModal(0)")
          span.icon
            i.fas.fa-lg.fa-solid.fa-microphone

    .content-row-space-left
      .navbar-item
        //- NuxtLink(:to="'/channel/studio/videos/upload'")
        button.button.is-white.is-rounded(@click="visibleModal(1)")
          span.icon
            i.fas.fa-lg.fa-solid.fa-video
      .navbar-item
        button.button.is-white.is-rounded(@click="visibleModal(2)")
          span.icon
            i.fas.fa-lg.fa-regular.fa-bell
      .navbar-item
        button.button.is-primary.is-inverted.is-rounded(@click="visibleModal(3)")
          img(src="/channelImg.png")
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

const audioModalActive = ref(false);
const uploadModalActive = ref(false);
const alertModalActive = ref(false);
const profileModalActive = ref(false);

function visibleModal(i: number) {
  if (i == 0) {
    audioModalActive.value = !audioModalActive.value;
  } else if (i == 1) {
    uploadModalActive.value = !uploadModalActive.value;
  } else if (i == 2) {
    alertModalActive.value = !alertModalActive.value;
  } else if (i == 3) {
    profileModalActive.value = !profileModalActive.value;
  }
}

function closeModal() {
  audioModalActive.value = false;
  uploadModalActive.value = false;
  alertModalActive.value = false;
  profileModalActive.value = false;
}

const alertList = ref([
  {
    alertID: 1,
    content:
      "コメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントです",
    createdAt: new Date("2023-11-01 12:15:01"),
    channel: {
      channelID: 1,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
    },
    movie: {
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movies/thumbnail_1.png",
    },
  },
  {
    alertID: 2,
    content:
      "コメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントです",
    createdAt: new Date("2023-11-01 12:15:01"),
    channel: {
      channelID: 1,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
    },
    movie: {
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movies/thumbnail_1.png",
    },
  },
  {
    alertID: 3,
    content:
      "コメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントですコメントです",
    createdAt: new Date("2023-11-01 12:15:01"),
    channel: {
      channelID: 1,
      name: "チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１",
      thumbnail: "/channelImg.png",
    },
    movie: {
      title:
        "タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１",
      thumbnail: "/movies/thumbnail_1.png",
    },
  },
]);

const searchWord = ref("");
const doSearch = () => {
  navigateTo(`/results?search_query=${searchWord.value}`);
};
</script>

<style lang="scss" scoped>
#mainHeader {
  position: fixed;
  height: 70px;
  width: 100%;
  z-index: 99990;
}
.cardModal {
  position: fixed;
  top: 60px;
  // right: 30vw;
  // width: 100%;
  z-index: 99991;
}
#audioModal {
  right: 30vw;
}
#uploadModal {
  right: 12vw;
}
#alertModal {
  right: 6vw;
  height: 80vh;
  .alertContent {
    width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .textContent {
    max-width: 200px;
  }
}
#bellIcon {
  // width: 120px;
  height: 200px;
  font-size: 120px;
}
#profileModal {
  right: 1vw;
}
#inputLeftRounded {
  border-radius: 40px 0 0 40px;
}
#searchLightRounded {
  border-radius: 0 40px 40px 0;
  width: 64px;
}
</style>
