<template lang="pug">
.card.cardModal#audioModal(v-if="audioModalActive")
  .card-content.p-2
    .content
      .content-row-space-between-center.pt-6
        p.title 音声で検索
        button.button.is-white.is-rounded(@click="closeModal")
          span.icon
            i.fas.fa-xmark
      p.subtitle.is-6 音声で検索するには、ブラウザの設定に移動し、マイクへのアクセスを許可してください
      button.button.is-light.is-rounded
        span.icon
          i.fas.fa-microphone

.card.cardModal#uploadModal(v-if="uploadModalActive")
  .card-content.p-1
    .content
      ul.menu-list.m-0
        ol.m-0
          NuxtLink(:to="'/channel/studio/videos/upload'")
            .content-row-space-left 
              span.icon
                i.far.fa-lg.fa-square-caret-up.fa-rotate-90
              p.subtitle.is-size-7.m-0.pl-5 動画をアップロード
        ol.m-0
          NuxtLink
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-tower-broadcast
              p.subtitle.is-size-7.m-0.pl-5 ライブ配信を開始
        ol.m-0
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
      .alertContent(v-if="alertList.length > 0")
        AlertCard(v-for="al in alertList" :alert="al")

      .alertContent.p-6(v-else)
        span.icon#bellIcon
          i.far.fa-bell
        .textContent
          p.subtitle.has-text-grey.is-6 通知をオンにしましょう
          p.subtitle.has-text-grey.is-size-7 チャンネル登録すると、お気に入りのチャンネルの最新動画について通知を受け取ることができます。

.card.cardModal#profileModal(v-if="profileModalActive")
  .card-content.p-0.m-2
    .media.border-bottom-light.p-2.mb-0
      .media-left
        figure.image.is-48x48
          img.is-rounded(src="https://bulma.io/images/placeholders/96x96.png")
      .media-content.has-text-left
        p.title.is-5 チャンネル名
        p.subtitle.is-6.mb-2 @abcdeee
        NuxtLink.is-size-7 チャンネルを表示
    
    .scrollView
      .menu-list.border-bottom-light.mb-0
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.fab.fa-lg.fa-google
            p.subtitle.is-size-7.m-0.pl-3 Googleアカウント
        NuxtLink.pt-3
          .content-row-space-between
            .content-row-space-left 
              span.icon
                i.far.fa-lg.fa-address-card
              p.subtitle.is-size-7.m-0.pl-3 アカウントを切り替える
            span.icon
              i.fas.fa-lg.fa-angle-right
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-arrow-right-from-bracket
            p.subtitle.is-size-7.m-0.pl-3 ログアウト

      .menu-list.border-bottom-light.mb-0
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-play
            p.subtitle.is-size-7.m-0.pl-3 YouTube Studio
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-dollar-sign
            p.subtitle.is-size-7.m-0.pl-3 購入とメンバーシップ
      
      .menu-list.border-bottom-light.mb-0
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-shield-halved
            p.subtitle.is-size-7.m-0.pl-3 YouTube でのデータ
        NuxtLink.pt-3
          .content-row-space-between
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-moon
              p.subtitle.is-size-7.m-0.pl-3 デザイン: ライト
            span.icon
              i.fas.fa-lg.fa-angle-right
        NuxtLink.pt-3
          .content-row-space-between
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-language
              p.subtitle.is-size-7.m-0.pl-3 言語: 日本語
            span.icon
              i.fas.fa-lg.fa-angle-right
        NuxtLink.pt-3
          .content-row-space-between
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-user-shield
              p.subtitle.is-size-7.m-0.pl-3 制限付きモード: オフ
            span.icon
              i.fas.fa-lg.fa-angle-right
        NuxtLink.pt-3
          .content-row-space-between
            .content-row-space-left 
              span.icon
                i.fas.fa-lg.fa-globe
              p.subtitle.is-size-7.m-0.pl-3 場所: 日本
            span.icon
              i.fas.fa-lg.fa-angle-right
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.far.fa-lg.fa-keyboard
            p.subtitle.is-size-7.m-0.pl-3 キーボードショートカット

      .menu-list.border-bottom-light.mb-0
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.fas.fa-lg.fa-gear
            p.subtitle.is-size-7.m-0.pl-3 設定

      .menu-list.mb-0
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.far.fa-lg.fa-circle-question
            p.subtitle.is-size-7.m-0.pl-3 ヘルプ
        NuxtLink.pt-3
          .content-row-space-left 
            span.icon
              i.far.fa-lg.fa-comment-dots
            p.subtitle.is-size-7.m-0.pl-3 フィードバックを送信

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
        button.button.is-light.is-rounded(@click="visibleModal(0,audioModalActive)")
          span.icon
            i.fas.fa-lg.fa-microphone

    .content-row-space-left
      .navbar-item.px-0
        button.button.is-white.is-rounded(@click="visibleModal(1,uploadModalActive)")
          span.icon
            i.fas.fa-lg.fa-video(v-if="uploadModalActive")
            i.fas.fa-lg.fa-video(v-else)
      .navbar-item.px-0
        button.button.is-white.is-rounded(@click="visibleModal(2,alertModalActive)")
          span.icon
            i.fas.fa-lg.fa-bell(v-if="alertModalActive")
            i.far.fa-lg.fa-bell(v-else)
      .navbar-item.px-0
        button.button.is-primary.is-inverted.is-rounded(@click="visibleModal(3,profileModalActive)")
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

function visibleModal(i: number, isActive: boolean) {
  closeModal();
  if (i == 0) {
    audioModalActive.value = !isActive;
  } else if (i == 1) {
    uploadModalActive.value = !isActive;
  } else if (i == 2) {
    alertModalActive.value = !isActive;
  } else if (i == 3) {
    profileModalActive.value = !isActive;
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
  // width: 30vw;
  border-radius: 40px 0 0 40px;
}
#searchLightRounded {
  border-radius: 0 40px 40px 0;
  width: 64px;
}
</style>
