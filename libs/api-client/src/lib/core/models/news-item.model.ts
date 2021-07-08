import { Expose } from 'class-transformer';

export class NewsItem /* implements INewsItem */ {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  date: string;

  @Expose()
  thumbnail?: string;

  @Expose()
  image?: string;

  @Expose()
  status: string;
}
