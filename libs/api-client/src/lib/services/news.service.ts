import { NewsItem } from '../core';
import { Base } from './base.service';

const resourceName = 'todos';

export class News extends Base {
  async get(id: string): Promise<NewsItem> {
    return this.request<NewsItem>(`${resourceName}/${id}`, NewsItem);
  }

  async all(): Promise<NewsItem[]> {
    let query = `${resourceName}`;
    query += '?limit=5&offset=0';

    return this.request<NewsItem[]>(query, NewsItem);
  }
}
