export async function useGetComments(movieID: string) {
  let returnValue = [
    {
      id: 1,
      commentID: '111',
      movieID: 'aaa',
      comment:
        'コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１\nコメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１\nコメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１コメント１',
      views: 300,
      goods: 21,
      bads: 3,
      publishedAt: new Date('2023-11-01 12:15:01'),
      updatedAt: new Date('2023-11-02 12:15:01'),
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
    },
    {
      id: 2,
      commentID: '111',
      movieID: 'aaa',
      comment: 'コメント2',
      views: 100,
      goods: 1,
      bads: 4,
      publishedAt: new Date('2024-01-02 20:01:01'),
      updatedAt: new Date('2024-01-03 20:01:01'),
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
    },
  ]

  return returnValue
}
