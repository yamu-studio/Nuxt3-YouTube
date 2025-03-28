export async function useGetMovies(janruCD = -1) {
  const { data, status } = useFetch('http://127.0.0.1:8000/youtube/movies')

  return {
    movies: data,
    status,
  }
}
export async function useGetMovieById(movieID: string) {
  const { data, status } = useFetch(
    `http://127.0.0.1:8000/youtube/movies/${movieID}`
  )

  return {
    movie: data,
    status,
  }
}
