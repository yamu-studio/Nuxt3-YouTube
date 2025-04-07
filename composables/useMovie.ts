// ※本来は自分の情報(ログイン者の情報:UserStore.authChannel.idとか)を
// queryやbodyに置くのはよろしくない(セキュリティ的に)

export async function useGetMovies(janruCD = -1) {
  const UserStore = useUserStore()

  const query = {
    janru_cd: janruCD,
  }

  if (UserStore.isLogin) {
    query.my_channel_id = UserStore.authChannel.id
  }

  const { data, status } = await useFetch(
    'http://127.0.0.1:8000/youtube/movies',
    {
      query: query,
    }
  )

  return {
    movies: data,
    status,
  }
}

export async function useGetMoviesByChannelID(channelID: number) {
  const UserStore = useUserStore()
  const { data, status } = await useFetch<MovieMaster[]>(
    'http://127.0.0.1:8000/youtube/movies',
    {
      query: {
        channel_id: channelID,
      },
    }
  )

  return {
    movies: data,
    status,
  }
}

export async function useSearchMoviesByWord(word: string) {
  const { data, status } = await useFetch(
    'http://127.0.0.1:8000/youtube/search',
    {
      query: { word: word, limit: 30 },
    }
  )

  return {
    movies: data,
    status,
  }
}

export async function useGetMovieById(movieID: string) {
  const { data, status } = await useFetch(
    `http://127.0.0.1:8000/youtube/movies/${movieID}`
  )
  return {
    movie: data,
    status,
  }
}

export async function useGetFavoriteMovie(id: number, isBad = false) {
  // queryを直書きするとこんな感じ
  // ※本来、ユーザー情報をqueryで渡すのはNG
  const { data, status, refresh } = await useFetch(
    `http://127.0.0.1:8000/youtube/movies/${id}/favorite?my_channel_id=2`
  )

  return {
    favorite: data,
    status,
    refresh,
  }
}

export async function useFavoriteMovie(id: number, isBad = false) {
  // queryを外に出して書くこともできる
  const response = await $fetch(
    `http://127.0.0.1:8000/youtube/movies/${id}/favorite`,
    {
      method: 'POST',
      query: { my_channel_id: 2, is_bad: isBad },
    }
  )
  return response
}

export async function useUnFavoriteMoviel(id: number) {
  const response = await $fetch(
    `http://127.0.0.1:8000/youtube/movies/${id}/un-favorite`,
    {
      method: 'DELETE',
      query: { my_channel_id: 2 },
    }
  )
  return response
}

export async function useGetMovieHistoryByMovieId(id: number) {
  const { data, status } = await useFetch(
    `http://127.0.0.1:8000/youtube/movies/${id}/history`,
    { query: { channel_id: 2 } }
  )
  return {
    history: data,
    status,
  }
}

export async function useUpdateMovieHistory(
  id: number,
  viewdeSecond: number,
  isFinish = false
) {
  const { data, status } = await useFetch(
    `http://127.0.0.1:8000/youtube/movies/${id}/history/update`,
    {
      method: 'POST',
      body: {
        channel_id: 2,
        view_second: viewdeSecond,
        is_finished: isFinish,
      },
    }
  )
  return {
    history: data,
    status,
  }
}
