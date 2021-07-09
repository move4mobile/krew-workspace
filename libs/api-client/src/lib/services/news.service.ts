import { plainToClass } from 'class-transformer';
import { NewsItem } from '../core';
import { Base } from './base.service';

const resourceName = 'todos';

export class News extends Base {
  protected getUrl(): string {
    return resourceName;
  }

  // async get(id: string): Promise<NewsItem> {
  //   return this.request<NewsItem>(`${resourceName}/${id}`).then(serialize);
  // }

  async all(): Promise<NewsItem[]> {
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
