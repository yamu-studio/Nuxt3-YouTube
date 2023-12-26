<template lang="pug">
.modalBack(v-if="isUploadModal")
  .modal-background
  .modal-card.Form.wideForm.mt-6
    header.modal-card-head.has-background-white
      p.modal-card-title.has-text-left.is-5 動画のアップロード
      button.button.is-black.is-inverted.is-rounded
        span.icon
          i.fas.fa-lg.fas.fa-comment-dots
      button.button.is-black.is-inverted.is-rounded
        span.icon
          i.fas.fa-lg.fas.fa-xmark
    section.modal-card-body
      .emptyBox

      .upload_zone
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
                  i.fas.fa-lg.fas.fa-arrow-up-from-bracket

      p.subtitle.is-6.m-1.mt-3 アップロードする動画ファイルをドラッグ＆ドロップします
      p.subtitle.has-text-grey.is-7.m-0 公開するまで、動画は非公開になります。

      label.button.is-info.mt-5(for="file_movie") ファイルを選択
      input(type="file" id="file_movie" multiple="" accept="video/mp4,video/x-m4v" ref="preview" @change="inputMovie" style="display:none;")

      .emptyBox

      p.subtitle.has-text-grey.is-7.m-0 YamTubeに動画を公開することにより、YamTubeの<NuxtLink :to="'/'">利用規約</NuxtLink>と<NuxtLink :to="'/'">コミュニティ ガイドライン</NuxtLink>に同意したものとみなされます。
      p.subtitle.has-text-grey.is-7.m-0 他者の著作権やプライバシー権を侵害しないようにしてください。 <NuxtLink :to="'/'">詳細</NuxtLink>
#studioView
  p c

</template>

<script setup lang="ts">
const isUploadModal = ref(true);
function closeModal() {
  isUploadModal.value = false;
}

const isLoading = ref(false);
// 動画アップロード系
async function inputMovie(event: any) {
  // api側
  // @app.post("/uploadVideo")
  // async def uploadVideo(video: UploadFile = File(...)): # <=ここではまった
  //   video_data = await video.read()
  //   upload_path = pathlib.Path(f'static/received_videos/{video.filename}')
  //   with upload_path.open(mode="wb") as f:
  //       f.write(video_data)
  //   return {"filename": video.filename}

  isLoading.value = true;

  let file = event.target.files[0];

  // console.log(file);
  // const blob = new Blob([file], { type: file.type });
  // // console.log(blob);

  const formdata = new FormData();
  formdata.append("file", file);

  const { data, error } = await useFetch(`http://127.0.0.1:8000/test/upload`, {
    method: "POST",
    // headers: {
    //   "content-type": "multipart/form-data",
    // },
    body: formdata,
  });
  if (!error.value) {
    console.log(data.value);
  }

  isLoading.value = false;
}
function dropImage(event: any) {
  isLoading.value = true;
  // console.log("Droped");
  let images = event.dataTransfer.files;

  isLoading.value = false;
}
const isEnter = ref(false);
function dragEnter(_index: number) {
  // console.log(_index);
  isEnter.value = true;
}
function dragLeave() {
  // console.log("out");
  isEnter.value = false;
}
</script>

<style lang="scss" scoped>
#studioView {
  min-height: 88vw;
}
</style>
