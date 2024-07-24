<template lang="pug">
.modal.is-active.has-text-centered
  .modal-background
  .modal-card.py-6
    .box.content
      h2.title {{ title }}
      p {{ message }}

      .content-row-center.pt-6
        button.button(v-if="isCansel" @click="doCansel") キャンセル
        button.button(@click="doOk") OK
</template>

<script setup lang="ts">
interface Props {
  title: string;
  message: string;
  isCansel?: boolean;
}

// 各種初期値設定
const props = withDefaults(defineProps<Props>(), {
  title: "",
  message: "",
  isCansel: false,
});

interface Emits {
  (e: "clickCansel"): void;
  (e: "clickOk"): void;
}
const emit = defineEmits<Emits>();

function doCansel() {
  emit("clickCansel");
}

function doOk() {
  emit("clickOk");
}
</script>

<style lang="scss" scoped>
.modal {
  z-index: 10;
}
</style>
