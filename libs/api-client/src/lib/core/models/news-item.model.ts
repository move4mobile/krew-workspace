import { NewsItemStatus } from '../../core';

export class NewsItem {
  id: string;
  title: string;
  date: string;
  thumbnail?: string;
  image?: string;
  status: NewsItemStatus;
}
