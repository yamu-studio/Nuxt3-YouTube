export interface ChannelInfo {
  channelID: string
  name: string
  description: string
  thumbnailUrl: string
  backImgUrl: string
  janruCd: number
}

export interface ChannelInsight {
  subscriberCount: number
  viewCount: number
  commentCount: number
  movieCount: number
  favoriteCount: number
}

export interface ChannelMaster {
  id: number
  info?: ChannelInfo
  insight?: ChannelInsight
}

export interface MovieInfo {
  title: string
  description: string
  movieUrl: string
  thumbnailUrl: string
  janruCd: number
  publishAt: string
}

export interface MovieInsight {
  viewCount: number
  favoriteCount: number
  commentCount: number
  goodCount: number
  badCount: number
}

export interface MovieMaster {
  id: number
  movieID: string
  channelId: number
  timeLongth: number
  createdAt: string
  isDeleted: boolean
  info?: MovieInfo
  insight?: MovieInsight
  channel?: ChannelMaster
}
