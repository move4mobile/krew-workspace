import { AgendaCategory } from '../../core';

export class AgendaItem {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  category: AgendaCategory;
  employeesOnly: boolean;
  allDay: boolean;
}
