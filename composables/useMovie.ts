export function useGetMovies(janruCD = -1) {
  // // API接続するとこんな感じ
  // new Promise(async (resolve, reject) => {
  //   const { data, error } = await useFetch(
  //     `http://127.0.0.1:8000/movies?janru_cd=${janruCD}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     }
  //   )
  //   if (!error.value) {
  //     let resList: any = []
  //     data.value.forEach((movie) => {
  //       resList.push(setDataForApi(movie))
  //     })
  //     resolve(resList)
  //   } else {
  //     reject(error.value)
  //   }
  // })

  const recoMovieList: Movie[] = [
    {
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
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 300,
        movies: 21,
      },
    },
    {
      id: 2,
      movieID: 'bbbbb',
      title:
        'タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２',
      movie: '/movies/movie_2.mp4',
      thumbnail: '/movies/thumbnail_2.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      // hashTags: 'あいうえお かきくけこ',
      time: 61,
      goods: 0,
      views: 11289019,
      comments: 2,
      publishedAt: new Date('2023-01-01 9:15:01'),
      channel: {
        id: 1,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 1234567,
        movies: 4218,
      },
    },
    {
      id: 3,
      movieID: 'ccccc',
      title:
        'タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３',
      movie: '/movies/movie_1.mp4',
      thumbnail: '/movies/thumbnail_3.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 3247,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 827365189,
      comments: 0,
      publishedAt: new Date('2023-11-30 11:15:01'),
      channel: {
        id: 3,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 10006000,
        movies: 12345,
      },
    },
    {
      id: 4,
      movieID: 'ddd',
      title:
        'タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４',
      movie: '/movies/movie_2.mp4',
      thumbnail: '/movies/thumbnail_4.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 99000,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 9810,
      comments: 3278,
      publishedAt: new Date('2000-01-01 10:15:01'),
      channel: {
        id: 4,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 31,
        movies: 5,
      },
    },
    {
      id: 5,
      movieID: 'eee',
      title:
        'タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５',
      movie: '/movies/movie_1.mp4',
      thumbnail: '/movies/thumbnail_5.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 5,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 33000,
      comments: 45,
      publishedAt: new Date('2022-3-01 12:15:01'),
      channel: {
        id: 5,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 98765,
        movies: 60,
      },
    },
    {
      id: 6,
      movieID: 'ff',
      title:
        'タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６',
      movie: '/movies/movie_2.mp4',
      thumbnail: '/movies/thumbnail_6.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 347,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 11289019,
      comments: 123617,
      publishedAt: new Date('2023-11-01 10:15:01'),
      channel: {
        id: 6,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 100000,
        movies: 180,
      },
    },
    {
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
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 300,
        movies: 21,
      },
    },
    {
      id: 2,
      movieID: 'bbbbb',
      title:
        'タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２タイトル２',
      movie: '/movies/movie_2.mp4',
      thumbnail: '/movies/thumbnail_2.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      // hashTags: 'あいうえお かきくけこ',
      time: 61,
      goods: 0,
      views: 11289019,
      comments: 2,
      publishedAt: new Date('2023-01-01 9:15:01'),
      channel: {
        id: 1,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 1234567,
        movies: 4218,
      },
    },
    {
      id: 3,
      movieID: 'ccccc',
      title:
        'タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３タイトル３',
      movie: '/movies/movie_1.mp4',
      thumbnail: '/movies/thumbnail_3.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 3247,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 827365189,
      comments: 0,
      publishedAt: new Date('2023-11-30 11:15:01'),
      channel: {
        id: 3,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 10006000,
        movies: 12345,
      },
    },
    {
      id: 4,
      movieID: 'ddd',
      title:
        'タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４タイトル４',
      movie: '/movies/movie_2.mp4',
      thumbnail: '/movies/thumbnail_4.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 99000,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 9810,
      comments: 3278,
      publishedAt: new Date('2000-01-01 10:15:01'),
      channel: {
        id: 4,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 31,
        movies: 5,
      },
    },
    {
      id: 5,
      movieID: 'eee',
      title:
        'タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５タイトル５',
      movie: '/movies/movie_1.mp4',
      thumbnail: '/movies/thumbnail_5.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 5,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 33000,
      comments: 45,
      publishedAt: new Date('2022-3-01 12:15:01'),
      channel: {
        id: 5,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 98765,
        movies: 60,
      },
    },
    {
      id: 6,
      movieID: 'ff',
      title:
        'タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６タイトル６',
      movie: '/movies/movie_2.mp4',
      thumbnail: '/movies/thumbnail_6.png',
      description:
        '概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄概要欄',
      time: 347,
      // hashTags: 'あいうえお かきくけこ',
      goods: 0,
      views: 11289019,
      comments: 123617,
      publishedAt: new Date('2023-11-01 10:15:01'),
      channel: {
        id: 6,
        channelID: 'abcde',
        name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
        thumbnail: '/channels/channelImg.png',
        description:
          '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
        subscribers: 100000,
        movies: 180,
      },
    },
  ]

  return recoMovieList
}
export function useGetMovieById(movieID: string) {
  // // API接続するとこんな感じ
  // new Promise(async (resolve, reject) => {
  //   const { data, error } = await useFetch(
  //     `http://127.0.0.1:8000/movies/${id}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     }
  //   )
  //   if (!error.value) {
  //     resolve(setDataForApi(data.value))
  //   } else {
  //     reject(error.value)
  //   }
  // })

  let returnValue = {
    id: 1,
    movieID: 'aaaaa',
    title:
      'タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１タイトル１',
    movie: '/movies/movie_2.mp4',
    thumbnail: '/movies/thumbnail_2.png',
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
      thumbnail: '/channels/channelImg.png',
      description:
        '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
      subscribers: 300,
      movies: 21,
    },
  }
  return returnValue
}

// 共通関数として使ってもいいが、pythonのキャメル・スネーク変換は考えておくべき...
function setDataForApi(mapData: any) {
  // 含まれているkeyを取得
  let outMap = mapData
  const keys = Object.keys(mapData)
  keys.forEach((key) => {
    if (mapData[key] != undefined && outMap[key] != undefined) {
      outMap[key] = mapData[key]
    }
    if (key == 'id') {
      outMap['id'] = mapData[key]
    } else if (key == 'movie_id') {
      outMap['movieID'] = mapData[key]
    } else if (key == 'time_longth') {
      outMap['time'] = mapData[key]
    } else if (key == 'created_at') {
      outMap['publishedAt'] = new Date(mapData[key])
    }

    if (key == 'info') {
      const infoKeys = Object.keys(mapData[key])
      infoKeys.forEach((subKey) => {
        if (subKey == 'title') {
          outMap['title'] = mapData[key][subKey]
        } else if (subKey == 'description') {
          outMap['description'] = mapData[key][subKey]
        } else if (subKey == 'movie_path') {
          outMap['movie'] = mapData[key][subKey]
        } else if (subKey == 'thumbnail_path') {
          outMap['thumbnail'] = mapData[key][subKey]
        }
      })
    }
    if (key == 'insight') {
      const insightKeys = Object.keys(mapData[key])
      insightKeys.forEach((subKey) => {
        if (subKey == 'view_count') {
          outMap['views'] = mapData[key][subKey]
        } else if (subKey == 'good_count') {
          outMap['goods'] = mapData[key][subKey]
        } else if (subKey == 'comment_count') {
          outMap['comments'] = mapData[key][subKey]
        }
      })
    }
    if (key == 'channel') {
      const channelKeys = Object.keys(mapData[key])
      channelKeys.forEach((subKey) => {
        let submapData = mapData[key][subKey]
        if (subKey == 'info') {
          const channelInfoKeys = Object.keys(submapData)
          channelInfoKeys.forEach((channelInfoKey) => {
            if (channelInfoKey == 'name') {
              outMap['channel']['name'] = submapData[channelInfoKey]
            } else if (channelInfoKey == 'channel_name') {
              outMap['channel']['channelID'] = submapData[channelInfoKey]
            } else if (channelInfoKey == 'thumbnail_path') {
              outMap['channel']['thumbnail'] = submapData[channelInfoKey]
            }
          })
        }
        if (subKey == 'insight') {
          const channelInsightKeys = Object.keys(submapData)
          channelInsightKeys.forEach((channelInsightKey) => {
            if (channelInsightKey == 'subscriber_count') {
              outMap['channel']['subscribers'] = submapData[channelInsightKey]
            }
          })
        }
      })
    }
  })

  return outMap
}

export async function useAddViewdeMovieHistory(
  movieID: string,
  viewdeSeconds: number,
  isFinish: boolean = false
) {
  const { data, error } = await useFetch(
    `http://127.0.0.1:8000/movies/history/add`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: {
        view_second: viewdeSeconds,
        movie_id: movieID,
        // 本来はログイン情報に結びついたIDを入れる
        // channel_id: userStore.~,
        channel_id: 1,
        is_watched: isFinish,
      },
    }
  )
  return !error.value
}
