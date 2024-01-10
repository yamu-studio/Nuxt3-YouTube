<template lang="pug">
.content-row-space-left-start.p-1 
  figure.image.is-32x32
    img.is-rounded(:src="cm.channel.thumbnail")
  .flex-leftover 
    .content-row-space-left.p-2
      p.title.is-size-7.cutMaxLength.m-0 {{ `@${cm.channel.channelID}` }}
      p.subtitle.is-size-7.cutMaxLength.m-0 {{ $common.dateAgo(cm.publishedAt) }} 
      p.subtitle.is-size-7.cutMaxLength.m-0(v-if="cm.publishedAt == cm.updatedAt") (編集済み)
    p.subtitle.is-6.pl-2.m-0 {{ cm.comment }}
    
    .content-row-space-left
      button.button.is-white
        span.icon
          i.fa-regular.fa-thumbs-up
        span {{ $common.millBillUnit(cm.goods) }}
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
