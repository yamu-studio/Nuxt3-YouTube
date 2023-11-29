import type { Channel } from "./channel";

export interface Movie {
  id: number;
  movieID: string;

  title: string;
  description: string;

  movie: any;
  thumbnail: string;

  hashTags: string;
  views: number;
  goods: number;
  publishedAt: Date;

  channel: Channel;
}
