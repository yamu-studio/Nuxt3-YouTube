export async function useGetChannels() {
  let returnValue = [
    {
      id: 1,
      channelID: 'aaa',
      accountID: 'yamu-studio',
      name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
      description:
        '概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です',
      backImg: '/channels/backImg_1.png',
      thumbnail: '/channels/thumbnail_1.png',
      subscribers: 1224,
      movies: 123,
    },
    {
      id: 2,
      channelID: 'bbb',
      accountID: 'yamu-studio',
      name: 'チャンネル名2',
      description: '概要欄',
      backImg: '/channels/backImg_1.png',
      thumbnail: '/channels/thumbnail_1.png',
      subscribers: 1224,
      movies: 123,
    },
    {
      id: 3,
      channelID: 'ccc',
      accountID: 'yamu-studio',
      name: 'チャンネル名3',
      description: '概要欄',
      backImg: '/channels/backImg_1.png',
      thumbnail: '/channels/thumbnail_1.png',
      subscribers: 1224,
      movies: 123,
    },
  ]

  return returnValue
}

export async function useGetChannelByID(channelID: string) {
  let returnValue = {
    id: 1,
    channelID: 'aaa',
    accountID: 'yamu-studio',
    name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
    description:
      '概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です',
    links: ['example.com/abcde', 'example2.com/abcde2', 'example3.com/abcde3'],
    backImg: '/channels/backImg_1.png',
    thumbnail: '/channels/thumbnail_1.png',
    subscribers: 1224,
    movies: 123,
  }
  return returnValue
}
