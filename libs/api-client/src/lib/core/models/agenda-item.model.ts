import { Expose } from 'class-transformer';
import { AgendaCategory } from '../../core';

export class AgendaItem {
  id: string;

  title: string;

  description: string;

  location: string;

  @Expose({ name: 'start_time' })
  startTime: string;

  @Expose({ name: 'end_time' })
  endTime: string;

  category: AgendaCategory;

  @Expose({ name: 'employees_only' })
  employeesOnly: boolean;

  @Expose({ name: 'all_day' })
  allDay: boolean;
}
