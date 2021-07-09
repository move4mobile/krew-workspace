import { plainToClass } from 'class-transformer';
// took 'isomorphic-unfetch' from an example. we don't have to use this.;
import * as fetchImport from 'isomorphic-unfetch';
import { Config } from '../core';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

export type Params = {
  [key: string]: any;
};

export abstract class BaseService {
  #clientId: string;
  #clientSecret: string;
  #basePath: string;
  #accessToken: string;

  constructor(config: Config) {
    this.#clientId = config.clientId;
    this.#clientSecret = config.clientSecret;
    this.#basePath = config.basePath || 'https://jsonplaceholder.typicode.com/';
  }

  protected abstract get(id: string | number): Promise<any>;
  protected abstract all(params?: Params): Promise<any[]>;

  // NOTE: we can replace this with 'fetch' or `axios`?
  protected request<T>(Model: any, endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.#basePath + endpoint;
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

  private getToken(): string {
    return this.#accessToken;
  }

  protected setToken(accessToken: string) {
    this.#accessToken = accessToken;
  }
}
