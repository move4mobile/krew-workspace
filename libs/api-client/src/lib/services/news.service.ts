// import { NewsItem } from './types';
import { plainToClass } from 'class-transformer';
import { NewsItem } from '../core/models/news-item.model';
import { Base } from './base.service';

const resourceName = 'news';

export class News extends Base {
  // this method is just another example
  async find() {
    return this.mockNews().map(p => plainToClass(NewsItem, p));
    // return this.getNewsItems();
  }
  getNewsItems() {
    let query = `${resourceName}`;
    query += '?limit=5&offset=0';
    return this.request<NewsItem[]>(query);
  }

  getNewsItem(id: string) {
    return this.request<NewsItem>(`${resourceName}/${id}`);
  }

  mockNews(): NewsItem[] {
    return [
      { id: '1', title: 'title 1', status: 'published', date: '' },
      { id: '2', title: 'title 2', status: 'published', date: '' },
      { id: '3', title: 'title 3', status: 'published', date: '' },
      { id: '4', title: 'title 4', status: 'published', date: '' },
      { id: '5', title: 'title 5', status: 'published', date: '' },
    ];
  }
}
