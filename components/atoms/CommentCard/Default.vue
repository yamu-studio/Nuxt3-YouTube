<template lang="pug">
.content-row-space-left-top.m-2
  figure.image.is-48x48.is-no-shrink
    img.is-rounded(:src="comment.channel.thumbnail")
  .is-flex-fill
    .content-row-space-left.p-2
      p.title.is-size-7.cutMaxLength.m-0 {{ `@${comment.channel.channelID}` }}
      p.subtitle.is-size-7.cutMaxLength.m-1 {{ formatDateAgo(comment.publishedAt) }} 
      p.subtitle.is-size-7.cutMaxLength.m-1(v-if="comment.publishedAt == comment.updatedAt") (編集済み)
    p.subtitle.is-7.pl-2.m-0 {{ comment.comment }}
    
    .content-row-space-left
      button.button.is-white
        span.icon
          i.fa-regular.fa-thumbs-up
        span {{ formatMillBillUnit(comment.goods) }}
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
  comment: any;
}>();
</script>

<style scoped></style>
