import { AgendaItem, IResourceAll, Params } from '../core';
import { BaseService } from './base.service';
import { DateTime } from 'luxon';

const resourceName = '/agenda';

export class AgendaService extends BaseService implements IResourceAll {
  async all(params: Params = {}): Promise<AgendaItem[]> {
    let query = `${resourceName}`;

    const now = DateTime.now();
    let from = now.minus({ days: 30 }).toISODate();
    let to = now.toISODate();

    if (params.from) {
      from = params.from;
    }
    if (params.to) {
      to = params.to;
    }

    const config = {
      from: from,
      to: to,
    };

    //prettier-ignore
    query += "?" + Object.keys(config).map(key => key + '=' + params[key]).join('&');

    return this.request<AgendaItem[]>(AgendaItem, query);
  }
}
