<template lang="pug">
.modal.is-active.has-text-centered
  .modal-background
  .modal-card.py-6
    .box.content
      p.title.is-4 {{ title }}
      p.has-text-grey.is-6 {{ message }}

      //- ローディング部分
      progress.progress.is-primary.mt-3(max="100")
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  message?: string;
}

// 各種初期値設定
const props = withDefaults(defineProps<Props>(), {
  title: "準備をしています。",
  message: "少々お待ちください。",
});
</script>

<style lang="scss" scoped>
.modal {
  z-index: 10;
}
</style>
