export interface Comment {
  id: number
  commentID: string
  movieID: string

  comment: string

  views: number
  goods: number
  bads: number

  publishedAt: Date
  updatedAt: Date

  channel: Channel
}
