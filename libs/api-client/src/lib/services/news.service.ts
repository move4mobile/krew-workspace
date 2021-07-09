import { NewsItem } from '../core';
import { BaseService } from './base.service';

const resourceName = 'todos';

export class NewsService extends BaseService {
  constructor(config: any) {
    super(config);

    console.log('new NewsService instance');
  }
  async get(id: string): Promise<NewsItem> {
    return this.request<NewsItem>(NewsItem, `${resourceName}/${id}`);
  }

  async all(): Promise<NewsItem[]> {
    let query = `${resourceName}`;
    query += '?limit=5&offset=0';

    return this.request<NewsItem[]>(NewsItem, query);
  }
}
