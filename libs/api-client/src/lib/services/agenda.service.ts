import { AgendaItem, IResourceAll, Params } from '../core';
import { BaseService } from './base.service';

const resourceName = '/agenda';

export class AgendaService extends BaseService implements IResourceAll {
  async all(params?: Params): Promise<AgendaItem[]> {
    let query = `${resourceName}`;

    const now = new Date();
    let from = now.setDate(now.getDate() -30);
    let to = now;

    if (params.from){
      from = params.from;
    }
    if (params.to){
      to = params.to;
    }

    const config = {
      from: new Intl.DateTimeFormat('en-us').format(from),
      to: new Intl.DateTimeFormat('en-us').format(to),
    }

    query += "?" + Object.keys(config).map(key => key + '=' + params[key]).join('&');

    console.log(query);

    return this.request<AgendaItem[]>(AgendaItem, query);
  }
}
