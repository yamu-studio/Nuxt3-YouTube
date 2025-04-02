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
      input.input.rounded-content-left(placeholder="検索" v-model="searchWord")
      button.button.rounded-content-right#searchBtn(@click="goSearch")
        span.icon
          i.fas.fa-lg.fa-magnifying-glass
    .navbar-item
      button.button.is-light.is-rounded
        span.icon
          i.fas.fa-lg.fa-microphone

  //- 右側
  .content-row-space-right(v-if="UserStore.isLogin")
    .navbar-item
      button.button.is-light.is-rounded(@click="toggleModal")
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
  
  .content-row-space-right(v-else)
    .navbar-item
      button.button.is-white.is-rounded
        span.icon
          i.fas.fa-lg.fa-ellipsis-vertical
    .navbar-item
      NuxtLink.button.is-light.is-rounded(to="/signin/identifier") ログイン

//- コンポーネントの方が良き
.modal(:class="{'is-active':isOpenUploadModal}")
  .modal-background
  .modal-card.wide-modal
    .modal-card-head.content-row-space-between
      
      p 動画のアップロード
      .buttons
        button.button.is-white.is-rounded
          span.icon
            i.fas.fa-lg.fa-triangle-exclamation
        button.button.is-white.is-rounded(@click="toggleModal")
          span.icon
            i.fas.fa-lg.fa-xmark

    .modal-card-body.has-text-centered
      .mt-6
        .control
          label.image(for="file_movie")
            div(
              :class="{'enter': isEnter}"
              class="drop_zone"
              @dragover.prevent
              @drop.prevent="dropImage"
              @dragenter="dragEnter"
              @dragleave="dragLeave") 
              input.input_file(type="file" id="file_movie" multiple="" accept="video/mp4,video/x-m4v" ref="preview" @change="inputMovie" style="display:none;")
              .button.is-light.is-rounded.p-6
                span.icon
                  i.fas.fa-2x.fa-arrow-up-from-bracket

      p.subtitle.is-6.m-1.mt-3 アップロードする動画ファイルをドラッグ＆ドロップします
      p.subtitle.has-text-grey.is-7.m-0 公開するまで、動画は非公開になります。

      label.button.is-rounded.is-black.mt-5(for="file_movie") ファイルを選択
      input(type="file" id="file_movie" multiple="" accept="video/mp4,video/x-m4v" ref="preview" @change="inputMovie" style="display:none;")

      .mt-6
        p.subtitle.has-text-grey.is-7.m-0 YamTubeに動画を公開することにより、YamTubeの<NuxtLink :to="'/'">利用規約</NuxtLink>と<NuxtLink :to="'/'">コミュニティ ガイドライン</NuxtLink>に同意したものとみなされます。
        p.subtitle.has-text-grey.is-7.m-0 他者の著作権やプライバシー権を侵害しないようにしてください。 <NuxtLink :to="'/'">詳細</NuxtLink>
      
</template>

<script setup lang="ts">
const UserStore = useUserStore();

const isOpenUploadModal = ref(false);
function toggleModal() {
  isOpenUploadModal.value = !isOpenUploadModal.value;
}

const searchWord = ref("");
function goSearch() {
  navigateTo(`/result?search_query=${searchWord.value}`);
}

const isLoading = ref(false);
// 動画アップロード系
async function uploadMovie(file: File) {
  if (!file) {
    alert("ファイルが選択されていません。");
    return;
  }

  const formData = new FormData();
  formData.append("title", "動画のタイトル");
  formData.append("channelID", UserStore.authChannel.channel_id);
  formData.append("video", file);

  isLoading.value = true;

  try {
    const { data, error } = await $fetch(
      `http://127.0.0.1:8000/youtube/movies/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (error) {
      console.error("アップロードエラー:", error);
      alert("アップロードに失敗しました。");
      return;
    }

    alert("アップロードが完了しました。");
  } catch (err) {
    console.error("予期せぬエラー:", err);
    alert("エラーが発生しました。");
  } finally {
    isLoading.value = false;
  }
}

function inputMovie(event: any) {
  let file = event.target.files[0];
  uploadMovie(file);
}
function dropImage(event: any) {
  isLoading.value = true;
  let file = event.dataTransfer.files[0];
  uploadMovie(file);
}
const isEnter = ref(false);
function dragEnter(_index: number) {
  isEnter.value = true;
}
function dragLeave() {
  isEnter.value = false;
}
</script>

<style scoped>
.wide-modal {
  width: 75vw;
}
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
