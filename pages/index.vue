<template lang="pug">
//- ヘッダー
nav.navbar.content-row-space-between.px-2
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
      input.input#input-left-rounded(placeholder="検索")
      button.button#input-right-rounded
        span.icon
          i.fas.fa-lg.fa-magnifying-glass
    .navbar-item
      button.button.is-light.is-rounded
        span.icon
          i.fas.fa-lg.fa-microphone

  //- 右側
  .content-row-space-right
    .navbar-item
      button.button.is-light.is-rounded
        span.icon
          i.fas.fa-lg.fa-plus
        span 作成
    .navbar-item
      button.button.is-white.is-rounded
        span.icon
          i.far.fa-lg.fa-bell
    .navbar-item
      button.button.is-primary.is-inverted.is-rounded.p-2#channel-thumbnail
        img(src="/channels/channelImg_1.png")

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
  div.is-max-full.px-3
    //- ジャンルの部分
    .tags.are-normal
      span.tag.is-hoverable(v-for="janru in janruList" :class="{'is-black':janru==selectedJanru}" @click="selectJanru(janru)") {{ janru }}

    ul.columns.is-multiline
      li.column.is-one-quarter(v-for="movie in movieList")
        .card.mb-0
          .card-image
            figure.image.is-16by9
              img(:src="movie.thumbnail" alt="Thumbnail")
            p.is-size-7.rounded-content.movie-time.px-1 {{ culcurateMovieTime(movie.time) }}
        .card-content.pt-2
          .media
            .media-left
              NuxtLink
                figure.image.is-32x32
                  img.is-rounded(:src="movie.channelThumbnail" alt="Channel image")
            .media-content.content.has-text-left 
              p.title.is-6.m-0 {{ movie.title }}
              p.help.has-text-grey.m-0 {{ movie.channelName }}
              p.help.has-text-grey.m-0 {{ getMillBillUnit(movie.viewCount) }} 回視聴・{{ getDateAgo(movie.publishedAt) }}
            .media-right
              button.button.is-white
                span.icon
                  i.fas.fa-ellipsis-vertical
</template>

<script setup lang="ts">
// ジャンル系
const selectedJanru = ref("すべて");
const janruList = [
  "すべて",
  "ゲーム",
  "音楽",
  "ミックス",
  "ライブ",
  "ポケットモンスター",
];

function selectJanru(janru: string) {
  selectedJanru.value = janru;
}

// 動画系
const movieList = [
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 30, // 動画時間(秒)→30s
    title: "動画タイトル",
    viewCount: 10000,
    publishedAt: new Date("2025-01-08 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 70, // 動画時間(秒)→1m10s
    title: "動画タイトル",
    viewCount: 100000000,
    publishedAt: new Date("2024-11-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
  {
    thumbnail: "/movies/thumbnail_1.png",
    time: 4000, // 動画時間(秒)→1h6m40s
    title: "動画タイトル",
    viewCount: 9876543210,
    publishedAt: new Date("2024-03-09 12:15:01"),
    channelName: "チャンネル名",
    channelThumbnail: "/channels/channelImg_1.png",
  },
];

// いろいろ計算系
function culcurateMovieTime(time: number) {
  // やること
  // 1時間未満：mm:ss
  // 1時間以上：hh:mm:ss(hhは24以上もブッコム)
  // 300 → 60 *5 → 05:00
  // 3900 → 3600 * 1 + 60 * 5 → 01:05:00

  let hh = Math.floor(time / 3600);
  let remainTime = time % 3600;
  let mm = Math.floor(remainTime / 60);
  let ss = time % 60;
  if (0 < hh) {
    return `${zeroPadding(hh, 2)}:${zeroPadding(mm, 2)}:${zeroPadding(ss, 2)}`;
  } else {
    return `${zeroPadding(mm, 2)}:${zeroPadding(ss, 2)}`;
  }
}

/**
 * 0埋めする
 * @param num
 * @param len
 * @returns
 */
function zeroPadding(num: number, len: number) {
  return (Array(len).join("0") + num).slice(-len);
}

function getDateAgo(date: Date) {
  // やること
  // ・〜秒前
  // ・〜分前
  // ...
  // ・〜週前
  // ・〜月前
  // ・〜年前
  const nowDate = new Date();
  const diffMilliSec = nowDate.getTime() - date.getTime();
  // →ミリs(1s = 1000ms)

  const diffInSecs = Math.floor(diffMilliSec / 1000);
  if (diffInSecs < 60) {
    return `${diffInSecs}秒前`;
  }

  const diffInMins = Math.floor(diffMilliSec / 1000 / 60);
  if (diffInMins < 60) {
    return `${diffInMins}分前`;
  }

  const diffInHours = Math.floor(diffMilliSec / 1000 / 60 / 60);
  if (diffInHours < 24) {
    return `${diffInHours}時間前`;
  }

  const diffInDays = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24);
  if (diffInDays < 7) {
    return `${diffInDays}日前`;
  }

  const diffInWeeks = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24 / 7);
  if (diffInWeeks < 5) {
    return `${diffInWeeks}週間前`;
  }

  const diffInMonths =
    (nowDate.getFullYear() - date.getFullYear()) * 12 +
    (nowDate.getMonth() - date.getMonth());
  if (diffInWeeks >= 4 && diffInMonths < 2) {
    return `1ヶ月前`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}ヶ月前`;
  }
  const diffInYears = nowDate.getFullYear() - date.getFullYear();
  return `${diffInYears}年前`;
}

function getMillBillUnit(num: number) {
  // すること
  // ・1→1
  // ・1000→1000
  // ・11000→1.1万
  // ・10000000→1000万
  // ・120000000→1.2億

  let roundingValue = 0;
  if (100000000 <= num) {
    roundingValue = Math.floor(num / 10000000) / 10; // →123,456,789 → 12 → 1.2 | 9,876,543,210 → 987 → 98.7 →98
    if (10 <= roundingValue) {
      roundingValue = Math.floor(roundingValue);
    }
    return `${roundingValue.toLocaleString()}億`; // 3000 → 3,000
  } else if (10000 <= num) {
    roundingValue = Math.floor(num / 1000) / 10;
    if (10 <= roundingValue) {
      roundingValue = Math.floor(roundingValue);
    }
    return `${roundingValue.toLocaleString()}万`;
  } else {
    return num.toLocaleString();
  }
}
</script>

<style scoped>
/* ヘッダー編 */
.content-row-space-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.content-row-space-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.content-row-space-left-top {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.content-row-space-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content-row-space-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.navbar-item {
  gap: 0px;
}

#input-left-rounded {
  border-radius: 40px 0 0 40px;
}
#input-right-rounded {
  border-radius: 0 40px 40px 0;
  width: 64px;
}

#channel-thumbnail {
  height: 48px;
  width: 48px;
}

/* サイドバー編 */
#sidebar {
  width: 80px;
}

.cut-max-length {
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 動画編 */
.is-max-full {
  width: 100%;
}

.rounded-content {
  border-radius: 4px;
}

.movie-time {
  position: absolute;
  bottom: 8px;
  right: 6px;

  color: white;
  background-color: rgba(31, 31, 31, 0.759);
}
</style>
