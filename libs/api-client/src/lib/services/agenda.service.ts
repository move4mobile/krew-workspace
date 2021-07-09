import { AgendaItem } from '../core';
import { BaseService } from './base.service';

const resourceName = 'posts';

export class AgendaService extends BaseService {
  protected get(id: string): Promise<AgendaItem> {
    throw new Error('Method not implemented.');
  }

  async all(): Promise<AgendaItem[]> {
    const query = `${resourceName}`;

    return this.request<AgendaItem[]>(AgendaItem, query);
  }
}
