// import fetch from 'isomorphic-unfetch';
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

export abstract class Base {
  private apiKey: string;
  private basePath: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.basePath = config.basePath || 'https://company-app.develop.m4mapp.com/api/';
  }

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
}
