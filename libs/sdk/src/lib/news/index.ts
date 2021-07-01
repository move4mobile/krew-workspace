import { NewsItem } from './types';
import { Base } from '../base';

const resourceName = 'news';

export class News extends Base {
  getNewsItems() {
    let query = `${resourceName}`;
    query += '?limit=5&offset=0';
    return this.request<NewsItem[]>(query);
  }

  getNewsItem(id: string) {
    return this.request<NewsItem>(`${resourceName}/${id}`);
  }
}
