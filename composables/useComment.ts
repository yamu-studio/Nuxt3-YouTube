export async function useGetComments(movieID: number) {
  const { data, status } = await useFetch(
    `http://127.0.0.1:8000/youtube/movies/${movieID}/comments`
  )

  return {
    comments: data,
    status,
  }
}

export async function useAddComment(comment: string, movieID: number) {
  const response = await $fetch(
    `http://127.0.0.1:8000/youtube/movies/${movieID}/comments/add`,
    {
      method: 'POST',
      body: {
        comment: comment,
        channelID: 2,
      },
    }
  )
  return response
}
