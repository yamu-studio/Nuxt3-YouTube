<template lang="pug">
.content-row-space-top-left.p-1 
  figure.image.is-48x48
    img.is-rounded(:src="cm.channel.thumbnail")
  .is-flex-grow
    .content-row-space-left.p-2
      p.has-text-weight-bold.is-size-6.cutMaxLength.m-0 {{ `@${cm.channel.channelID}` }}
      p.is-size-7.cutMaxLength.mx-2 {{ commonDateAgo(cm.publishedAt) }} 
      p.is-size-7.cutMaxLength.mx-2(v-if="cm.publishedAt != cm.updatedAt") (編集済み)
    p.subtitle.is-6.pl-2.m-0 {{ cm.comment }}
    
    .content-row-space-left
      button.button.is-white
        span.icon
          i.fa-regular.fa-thumbs-up
        span {{ commonMillBillUnit(cm.goods) }}
      button.button.is-white
        span.icon
          i.fa-regular.fa-thumbs-down
      button.button.is-white 返信

  button.button.is-small.is-white#hiddenBtn
    span.icon
      i.fas.fa-solid.fa-ellipsis-vertical
</template>

<script setup lang="ts">
const props = defineProps<{
  cm: any;
}>();
</script>

<style lang="scss" scoped>
#hiddenBtn {
  color: rgba(255, 255, 255, 0);

  :hover {
    color: black;
  }
}
</style>
