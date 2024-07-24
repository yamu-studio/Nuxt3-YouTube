export async function useGetChannels() {
  // // AIPから取得ならこんな感じ
  // const { data, error } = await useFetch(
  //   `http://127.0.0.1:8000/channels/${channelID}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }
  // );
  // if (!error.value) {
  //   setDataForApi(data.value);
  // } else {
  //   // エラーにする
  //   throw createError({
  //     statusCode: 404,
  //     statusMessage: "チャンネルが見つかりませんでした。",
  //   });
  // }

  let returnValue = []

  // 各配列要素への非同期処理はこれが今のところ良き
  // await Promise.all(
  //   ~.map(async (data) => {
  //     ~~
  //   })
  // )

  return returnValue
}

export function useGetChannelByID(channelID: string) {
  // // AIPから取得ならこんな感じ
  // const { data, error } = await useFetch(
  //   `http://127.0.0.1:8000/channels/${channelID}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }
  // );
  // if (!error.value) {
  //   setDataForApi(data.value);
  // } else {
  //   // エラーにする
  //   throw createError({
  //     statusCode: 404,
  //     statusMessage: "チャンネルが見つかりませんでした。",
  //   });
  // }

  let returnValue: Channel = {
    id: 1,
    channelID: 'aaa',
    accountID: 'yamu-studio',
    name: 'チャンネル名１チャンネル名１チャンネル名１チャンネル名１チャンネル名１',
    description:
      '概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です概要欄です',
    backImg: '/channels/channelBack.png',
    thumbnail: '/channels/channelImg.png',
    subscribers: 1224,
    movies: 123,
  }
  return returnValue
}
