import { plainToClass } from 'class-transformer';
// took 'isomorphic-unfetch' from an example. we don't have to use this.;
import * as fetchImport from 'isomorphic-unfetch';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

type Config = {
  apiKey: string;
  basePath?: string;
};

export type Params = {
  [key: string]: any;
};

export abstract class BaseService {
  private apiKey: string;
  private basePath: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.basePath = config.basePath || 'https://jsonplaceholder.typicode.com/';
  }

  protected abstract get(id: string | number): Promise<any>;
  protected abstract all(params?: Params): Promise<any[]>;

  // NOTE: we can replace this with 'fetch' or `axios`?
  protected request<T>(Model: any, endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: 'Bearer ' + this.apiKey,
      'Content-type': 'application/json',
    };

    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then(r => {
      if (r.ok) {
        return plainToClass<T, any>(Model, r.json());
      }
      throw new Error(r.statusText);
    });
  }
}
