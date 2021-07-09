// took 'isomorphic-unfetch' from an example. we don't have to use this.;

import { plainToClass } from 'class-transformer';
import * as fetchImport from 'isomorphic-unfetch';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

type Config = {
  apiKey: string;
  basePath?: string;
};

export type Pagination = {
  page?: number;
  per_page?: number;
};

export type QueryFilter = {
  limit?: number;
};

export abstract class Base<T> {
  private apiKey: string;
  private basePath: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.basePath = config.basePath || 'https://jsonplaceholder.typicode.com/';
  }
  public get<T>(id: string): Promise<T> {
    return this.request<T>(`${this.getUrl()}/${id}`);
  }

  protected abstract getUrl(): string;

  // protected abstract get(id: string): Promise<any>;
  // protected abstract all(filter: QueryFilter): Promise<any[]>;

  // TODO: replace with 'fetch' or `axios`?
  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.basePath + endpoint;
    const headers = {
      // 'api-key': this.apiKey,
      Authorization: 'Bearer ' + this.apiKey,
      'Content-type': 'application/json',
    };

    const config = {
      ...options,
      headers,
    };

    console.log('request ' + url);

    return fetch(url, config).then(r => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r.statusText);
    });
  }

  private serialize(data: any): T {
    return plainToClass(T, data);
  }

  // private serializeMany(data: any[]): T[] {
  //   return data.map(serialize);
  // }
}
