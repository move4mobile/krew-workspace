import { plainToClass } from 'class-transformer';
import { CalendarItem } from '../core';
import { Base } from './base.service';

const resourceName = 'posts';

export class Calendar extends Base {
  protected getUrl(): string {
    return resourceName;
  }

  // async get(id: string): Promise<CalendarItem> {
  //   return this.request<CalendarItem>(`${resourceName}/${id}`).then(serialize);
  // }

  async all(): Promise<CalendarItem[]> {
    const query = `${resourceName}`;

    return this.request<CalendarItem[]>(query).then(serializeMany);
  }
}

function serialize(data: any): CalendarItem {
  return plainToClass(CalendarItem, data);
}

function serializeMany(data: any[]): CalendarItem[] {
  return data.map(serialize);
}
