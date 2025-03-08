<template lang="pug">
//- ヘッダー
AtomsHeaderDefault

.content-row-space-left-top
  //- サイドバー
  ul#sidebar
    li.has-text-centered.mt-2.mb-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-house
        p.is-size-7.cut-max-length ホーム
    li.has-text-centered.my-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-circle-play
        p.is-size-7.cut-max-length ショート
    li.has-text-centered.my-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-tv
        p.is-size-7.cut-max-length 登録チャンネル
    li.has-text-centered.my-5
      NuxtLink.has-text-black
        span.icon
          i.fas.fa-lg.fa-photo-film
        p.is-size-7.cut-max-length マイページ
    
  //- メイン
  .width-full.px-3
    figure.image
      img.rounded-content#channelBackImg(:src="channelData.backImg")
  
    .content-row-space-left-top.p-2.pt-5
      img.is-rounded.is-flex-fill#channelIcon(:src="channelData.thumbnail")
      .has-text-left.mx-2
        p.title.m-0.p-2 {{ channelData.name }}
        .content-row-space-left
          p.is-size-7.m-0.p-1 
            span.has-text-weight-bold @{{ channelData.accountID }}
            span.has-text-grey ・チャンネル登録者数 {{ formatMillBillUnit(channelData.subscribers) }}人・{{ formatMillBillUnit(channelData.movies) }} 本の動画
        
        .content-row-space-left.py-1
          NuxtLink.has-text-grey.is-size-7#channelDescription {{ channelData.description }}
          NuxtLink
            span.icon.has-text-grey
              i.fas.fa-angle-right
        
        .content-row-space-left.py-1(v-if="0 < channelData.links.length")
          NuxtLink {{ channelData.links[0] }}
          NuxtLink.has-text-grey.is-size-7(v-if="1 < channelData.links.length") 、他 {{ channelData.links.length - 1 }} 件のリンク
          
        button.button.is-black.is-rounded.my-3 チャンネル登録

    .tabs.mb-3
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
        button(@click="fetchSearchForm")
          span.icon
            i.fas.fa-magnifying-glass
        div(v-if="isOpenSearchForm")
          input.searchInput(v-model="searchText" placeholder="検索")
    
    div(v-if="tabNo == 1")
      .tags.are-medium.mb-3
        span.tag.is-hoverable(v-for="order in orderList" :class="[order.cd == nowOrder ? 'is-black':'is-light']" @click="changeOrder(order.cd)") {{ order.title }}

      ul.columns.is-multiline(v-if="tabNo == 1")
        li.column.is-one-third(v-for="mv in chMovieList")
          AtomsMovieCardDefault(:movie="mv")

    div(v-else-if="tabNo == 2")
    div(v-else-if="tabNo == 3")
    div(v-else-if="tabNo == 4")
    div(v-else-if="tabNo == 5")
    div(v-else)
      p Home
      
</template>

<script setup lang="ts">
const channelID = useRoute().params.cid as string;

const channelData = await useGetChannelByID(channelID);
const chMovieList = await useGetMovies();

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

const isOpenSearchForm = ref(false);
function fetchSearchForm() {
  isOpenSearchForm.value = !isOpenSearchForm.value;
}
</script>

<style scoped>
/* サイドバー編 */
#sidebar {
  width: 72px;
}

#channelBackImg {
  height: 20vh;
  overflow: hidden;
}

#channelIcon {
  width: 160px;
  height: 160px;
}

#channelDescription {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.tabs li.is-active a {
  border-bottom-color: hsl(0, 0%, 0%);
  color: hsl(0, 0%, 0%);
}

.searchInput {
  border: none;
  outline: none;
  border-bottom: 2px solid #999;
  padding: 8px 6px;
  width: 100%;
}
.searchInput:focus {
  border-bottom-color: #000000;
}
</style>
