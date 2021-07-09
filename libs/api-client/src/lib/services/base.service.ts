import { plainToClass } from 'class-transformer';
// took 'isomorphic-unfetch' from an example. we don't have to use this.;
import * as fetchImport from 'isomorphic-unfetch';
import { Config } from '../core';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

export abstract class BaseService {
  #clientId: string;
  #clientSecret: string;
  #basePath: string;
  #accessToken: string;

  constructor(config: Config) {
    this.#clientId = config.clientId || '3c798074ceb26d43da9f0d6e845d3e44';
    //prettier-ignore
    this.#clientSecret = config.clientSecret || '928198f6183b96323d5572c93420cc2b922144aa72bb3974f98539a44cde840b10579f9d6031a38637b6e1b7119c1259b2b658b106a1553bac317e91edd435dc';
    this.#basePath = config.basePath || 'https://jsonplaceholder.typicode.com/';
  }

  // NOTE: we can replace this with 'fetch' or `axios`?
  protected request<T>(Model: any, endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.#basePath + endpoint;
    const headers = {
      Authorization: 'Bearer ' + this.#accessToken,
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

  protected setToken(accessToken: string) {
    this.#accessToken = accessToken;
  }
}
