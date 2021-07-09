import { AgendaItem } from '../core';
import { BaseService } from './base.service';

const resourceName = 'posts';

export class AgendaService extends BaseService {
  async get(id: string): Promise<AgendaItem> {
    return this.request<AgendaItem>(AgendaItem, `${resourceName}/${id}`);
  }

  async all(): Promise<AgendaItem[]> {
    const query = `${resourceName}`;

    return this.request<AgendaItem[]>(AgendaItem, query);
  }
}
