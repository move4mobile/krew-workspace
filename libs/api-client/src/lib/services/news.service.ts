import { plainToClass } from 'class-transformer';
import { NewsItem } from '../core';
import { Base } from './base.service';

const resourceName = 'todos';

interface IResource {
  find(): Promise<any>;
  findAll(): Promise<any[]>;
}

export class News extends Base implements IResource {
  async find(): Promise<NewsItem> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<NewsItem[]> {
    throw new Error('Method not implemented.');
  }

  async get(id: string): Promise<NewsItem> {
    return this.request<NewsItem>(`${resourceName}/${id}`).then(serialize);
  }

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
