export async function useGetChannelByID(channelID: string) {
  const { data, status } = await useFetch(
    `http://127.0.0.1:8000/youtube/channels/${channelID}`
  )

  return {
    channel: data,
    status,
  }
}

export async function useGetSubscribeChannel(id: number) {
  const { data, status, refresh } = await useFetch(
    `http://127.0.0.1:8000/youtube/channels/${id}/is-subscribe?my_channel_id=2`
  )

  return {
    subscribe: data,
    status,
    refresh,
  }
}

export async function useSubscribeChannel(id: number) {
  const response = await $fetch(
    `http://127.0.0.1:8000/youtube/channels/${id}/subscribe`,
    {
      method: 'POST',
      query: { my_channel_id: 2 },
    }
  )
  return response
}

export async function useUnSubscribeChannel(id: number) {
  const response = await $fetch(
    `http://127.0.0.1:8000/youtube/channels/${id}/un-subscribe`,
    {
      method: 'DELETE',
      query: { my_channel_id: 2 },
    }
  )
  return response
}
