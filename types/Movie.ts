import type { Channel } from './Channel'

export interface Movie {
  id: number
  movieID: string

  title: string
  description: string
  time: number

  movie: any
  thumbnail: string

  // hashTags: string
  views: number
  goods: number
  comments: number

  publishedAt: Date

  channel: Channel
}
