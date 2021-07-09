import { AgendaItem } from '../core';
import { BaseService, IResourceAll, Params } from './base.service';

const resourceName = 'posts';

export class AgendaService extends BaseService implements IResourceAll {
  async all(params?: Params): Promise<AgendaItem[]> {
    const query = `${resourceName}`;

    return this.request<AgendaItem[]>(AgendaItem, query);
  }
}
