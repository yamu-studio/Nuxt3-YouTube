export async function useGetMovies(janruCD = -1) {
  const { data, status } = await useFetch(
    'http://127.0.0.1:8000/youtube/movies'
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

export async function useFavoriteMovie(id: number, isBad = false) {
  const response = await $fetch(
    `http://127.0.0.1:8000/youtube/movies/${id}/favorite`,
    {
      method: 'POST',
      query: { my_channel_id: 2, is_bad: isBad },
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
