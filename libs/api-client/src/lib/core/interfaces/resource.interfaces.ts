import { Params } from '../../core';

export interface IResourceGet {
  get(id: string | number): Promise<any>;
}

export interface IResourceAll {
  all(params?: Params): Promise<any[]>;
}
