import { AgendaItem } from '../core';
import { BaseService, Params } from './base.service';

const resourceName = 'posts';

export class AgendaService extends BaseService {
  protected get(id: string): Promise<AgendaItem> {
    throw new Error('Method not implemented.');
  }

  async all(params?: Params): Promise<AgendaItem[]> {
    const query = `${resourceName}`;

    return this.request<AgendaItem[]>(AgendaItem, query);
  }
}
