import { NewsItem } from './types';
import { Base } from '../base';

const resourceName = 'news';

export class News extends Base {
  // this method is just another example
  find() {
    return this.getNewsItems();
  }
  getNewsItems() {
    let query = `${resourceName}`;
    query += '?limit=5&offset=0';
    return this.request<NewsItem[]>(query);
  }

  getNewsItem(id: string) {
    return this.request<NewsItem>(`${resourceName}/${id}`);
  }
}
