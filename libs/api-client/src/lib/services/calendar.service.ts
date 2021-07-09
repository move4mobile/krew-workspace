import { CalendarItem } from '../core';
import { Base } from './base.service';

const resourceName = 'posts';

export class Calendar extends Base {
  async get(id: string): Promise<CalendarItem> {
    return this.request<CalendarItem>(`${resourceName}/${id}`, CalendarItem);
  }

  async all(): Promise<CalendarItem[]> {
    const query = `${resourceName}`;

    return this.request<CalendarItem[]>(query, CalendarItem);
  }
}
