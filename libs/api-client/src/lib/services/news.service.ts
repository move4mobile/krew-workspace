import { NewsItem } from '../core';
import { BaseService, IResourceAll, IResourceGet, Params } from './base.service';

const resourceName = 'todos';

export class NewsService extends BaseService implements IResourceAll, IResourceGet {
  constructor(config: any) {
    super(config);
  }
  async get(id: string): Promise<NewsItem> {
    return this.request<NewsItem>(NewsItem, `${resourceName}/${id}`);
  }

  async all(params?: Params): Promise<NewsItem[]> {
    let query = `${resourceName}`;
    query += '?limit=5&offset=0';

    return this.request<NewsItem[]>(NewsItem, query);
  }
}
