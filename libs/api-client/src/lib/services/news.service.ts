import { plainToClass } from 'class-transformer';
import { NewsItem } from '../core';
// import { NewsItem } from '../core/models/news-item.model';
import { Base } from './base.service';

const resourceName = 'albums';

export class News extends Base {
  async findOne(id: string): Promise<NewsItem> {
    return this.request<NewsItem>(`${resourceName}/${id}`).then(serialize);
  }

  async findMany(): Promise<NewsItem[]> {
    let query = `${resourceName}`;
    query += '?limit=5&offset=0';

    return this.request<NewsItem[]>(query).then(serializeMany);
  }
}

function serialize(data: any): NewsItem {
  return plainToClass(NewsItem, data);
}

function serializeMany(data: any[]): NewsItem[] {
  return data.map(serialize);
}
