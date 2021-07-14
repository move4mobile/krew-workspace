import { plainToClass } from 'class-transformer';
// took 'isomorphic-unfetch' from an example. we don't have to use this.;
import * as fetchImport from 'isomorphic-unfetch';
import { Config, DEFAULT_CONFIG } from '../core';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

export abstract class BaseService {
  #basePath: string;
  #accessToken: string;

  constructor(configData: Config) {
    const config = Object.assign({}, DEFAULT_CONFIG, configData);

    if (config.sandbox === true) {
      // Sandbox mode
      this.#basePath = 'https://company-app.develop.m4mapp.com/api';
    } else {
      // Default settings (production)
      this.#basePath = 'https://api.companyapp.m4m.io/api';
    }
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

  // TODO: this is a separate method for testing
  protected postLogin(endpoint: string, postData: any, options?: RequestInit): Promise<any> {
    const url = this.#basePath + endpoint;
    const headers = {
      'Content-type': 'application/json',
    };

    const config = {
      method: 'POST',
      ...options,
      headers,
      body: JSON.stringify(postData),
    };

    console.log(config);

    return fetch(url, config).then(r => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r.statusText);
    });
  }

  protected saveToken(accessToken: string) {
    this.#accessToken = accessToken;
  }
}
