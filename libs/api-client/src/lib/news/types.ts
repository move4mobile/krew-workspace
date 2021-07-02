import { Pagination } from '../base';

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  thumbnail?: string;
  image?: string;
  status: string;
};
