<template lang="pug">
TemplatesLoadingModal(v-if="isLoading")
.container.is-fullhd.p-1(v-else)
  figure.image
    img.rounded-content#channelBackImg(:src="channelData.backImg")
  
  .content-row-space-top-left.p-2.pt-5
    figure.image.is-128x128
      img(:src="channelData.thumbnail")
    .has-text-left
      p.title.m-0.p-2 {{ channelData.name }}
      .content-row-space-left
        p.subtitle.is-size-7.has-text-grey.m-0.p-1 @{{ channelData.accountID }}・チャンネル登録者数 {{ commonMillBillUnit(channelData.subscribers) }}人・{{ commonMillBillUnit(channelData.movies) }} 本の動画
      
      .content-row-space-left
        NuxtLink.is-white.m-1.pt-1.pb-1
          span.has-text-grey.is-size-7 {{ commonCutWordLengthStr(channelData.description,30) }}
          span.icon.has-text-grey
            i.fas.fa-angle-right
        
      button.button.is-black.is-rounded チャンネル登録
  .tabs
    ul
      li(:class="{'is-active':tabNo == 0}")
        NuxtLink(@click="moveTag(0)") ホーム
      li(:class="{'is-active':tabNo == 1}")
        NuxtLink(@click="moveTag(1)") 動画
      li(:class="{'is-active':tabNo == 2}")
        NuxtLink(@click="moveTag(2)") ショート
      li(:class="{'is-active':tabNo == 3}")
        NuxtLink(@click="moveTag(3)") ライブ
      li(:class="{'is-active':tabNo == 4}")
        NuxtLink(@click="moveTag(4)") 再生リスト
      li(:class="{'is-active':tabNo == 5}")
        NuxtLink(@click="moveTag(5)") コミュニティ
  

  .content-row-space-left.p-0.my-3
    button.button.is-small.mx-3(v-for="order in orderList" :key="order.cd" :class="[order.cd == nowOrder ? 'is-black':'is-light']" @click="changeOrder(order.cd)") {{ order.title }}
    
  ul.columns.is-multiline(v-if="tabNo == 1")
    li.column.is-one-third(v-for="mv in chMovieList")
      AtomsMovieDefaultCard(:movie="mv")


</template>

<script setup lang="ts">
const channelID = useRoute().params.cid as string;

const tabNo = ref(1);
function moveTag(i: number) {
  tabNo.value = i;
}

const nowOrder = ref(0);
const orderList = [
  { title: "新しい順", cd: 0 },
  { title: "人気の動画", cd: 1 },
  { title: "古い順", cd: 2 },
];
function changeOrder(i: number) {
  nowOrder.value = i;
}

const isLoading = ref(true);
const channelData = ref<Channel>();
const chMovieList = ref<Movie[]>([]);

// 動画のダウンロードはこれでいける
// →動画用サーバーのURLでやればもっと楽
onMounted(async () => {
  channelData.value = useGetChannelByID(channelID);
  chMovieList.value = useGetMovies();

  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
#channelView {
  min-height: 88vw;
}
#channelBackImg {
  height: 20vh;
  overflow: hidden;
}
.tabs li.is-active a {
  border-bottom-color: hsl(0, 0%, 0%);
  color: hsl(0, 0%, 0%);
}
</style>
