export interface Channel {
  id: number
  channelID: string
  accountID?: string

  name: string
  description: string
  thumbnail?: string
  backImg?: string

  subscribers: number
  movies: number
}
