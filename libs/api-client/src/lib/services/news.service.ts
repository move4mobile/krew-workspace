import { DEFAULT_CONFIG, NewsItem } from '../core';
import { BaseService } from './base.service';
import { IResourceAll, IResourceGet, Params } from '../core';

const resourceName = '/news';

export class NewsService extends BaseService implements IResourceAll, IResourceGet {
  constructor(config: any) {
    super(config);
  }
  async get(id: string): Promise<NewsItem> {
    return this.request<NewsItem>(NewsItem, `${resourceName}/${id}`);
  }

  async all(params?: Params): Promise<NewsItem[]> {
    let query = `${resourceName}`;

    const config = Object.assign({
      limit: 10,
      offset: 0
    }, params);

    query += "?" + Object.keys(config).map(key => key + '=' + params[key]).join('&');

    return this.request<NewsItem[]>(NewsItem, query);
  }
}
