import { Expose } from 'class-transformer';

export class CalendarItem /* implements ICalendarItem */ {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  date: string;
}
