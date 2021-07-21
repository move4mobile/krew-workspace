import { plainToClass } from 'class-transformer';
// took 'isomorphic-unfetch' from an example. we don't have to use this.;
import * as fetchImport from 'isomorphic-unfetch';
import { Config, DEFAULT_CONFIG } from '../core';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export abstract class BaseService {
  #basePath: string;
  #accessToken: string;
  #refreshToken: string;
  #storagemode: 'LOCAL_STORAGE' | 'MEMORY';

  constructor(configData: Config) {
    const config = Object.assign({}, DEFAULT_CONFIG, configData);

    this.#storagemode = config.storageMode;

    if (config.sandbox === true) {
      // Sandbox mode
      this.#basePath = 'https://company-app.develop.m4mapp.com/api';
    } else {
      // Default settings (production)
      this.#basePath = 'https://api.companyapp.m4m.io/api';
    }

    if (config.devProxyPort) {
      this.#basePath = `http://127.0.0.1:${config.devProxyPort}/` + this.#basePath;
    }
  }

  // NOTE: we can replace this with 'fetch' or `axios`?
  protected request<T>(Model: any, endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.#basePath + endpoint;
    const headers = {
      Authorization: 'Bearer ' + this.getAccessToken(),
      'Content-type': 'application/json',
    };

    const config = {
      ...options,
      headers,
    };

    console.log('fetch ' + url);

    return fetch(url, config).then(r => {
      if (r.ok) {
        return plainToClass<T, any>(Model, r.json());
      }
      throw new Error(r.statusText);
    });
  }

  protected post(endpoint: string, postData: any, options?: RequestInit) {
    const url = this.#basePath + endpoint;
    const headers = {
      Authorization: 'Bearer ' + this.getAccessToken(),
      'Content-type': 'application/json',
    };

    const config = {
      method: 'POST',
      ...options,
      headers,
      body: JSON.stringify(postData),
    };

    return fetch(url, config).then(r => {
      if (r.ok === false) {
        throw new ResponseError(r.statusText,r.status);
      }
    });
  }

  // TODO: this is a separate method for testing
  protected requestWithoutBearer(endpoint: string, postData: any, options?: RequestInit): Promise<any> {
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

    return fetch(url, config).then(r => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r.statusText);
    });
  }

  protected saveToken(accessToken: string, refreshToken: string) {
    this.#accessToken = accessToken; // NOTE: doesn't work (yet)
    this.#refreshToken = refreshToken;

    switch (this.#storagemode) {
      case 'LOCAL_STORAGE':
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        break;
      default:
        throw new Error(`Storage mode ${this.#storagemode} not yet supported`);
    }
  }

  protected getAccessToken(): string|null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
  protected getRefreshToken(): string|null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

}
