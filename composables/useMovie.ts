export async function useGetMovies(janruCD = -1) {
  const recoMovieList = [
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 30, // 動画時間(秒)→30s
      title:
        '動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル動画タイトル',
      viewCount: 10000,
      publishedAt: new Date('2025-01-08 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 70, // 動画時間(秒)→1m10s
      title: '動画タイトル',
      viewCount: 100000000,
      publishedAt: new Date('2024-11-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
    {
      movieID: 'aaaaa',
      thumbnail: '/movies/thumbnail_1.png',
      time: 4000, // 動画時間(秒)→1h6m40s
      title: '動画タイトル',
      viewCount: 9876543210,
      publishedAt: new Date('2024-03-09 12:15:01'),
      channel: {
        channelID: 'abcde',
        name: 'チャンネル名',
        thumbnail: '/channels/thumbnail_1.png',
      },
    },
  ]

  return recoMovieList
}
export async function useGetMovieById(movieID: string) {
  const returnValue = {
    id: 1,
    movieID: 'aaaaa',
    title:
      'タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１',
    movie: '/movies/movie_1.mp4',
    thumbnail: '/movies/thumbnail_1.png',
    description:
      '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
    // hashTags: 'あいうえお かきくけこ',
    time: 30,
    goods: 0,
    views: 33000,
    comments: 20,
    publishedAt: new Date('2023-11-01 12:15:01'),
    channel: {
      id: 1,
      channelID: 'abcde',
      name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
      thumbnail: '/channels/thumbnail_1.png',
      description:
        '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
      subscribers: 300,
      movies: 21,
    },
  }
  return returnValue
}
