import { Expose } from 'class-transformer';

export class AgendaItem /* implements IAgendaItem */ {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  date: string;
}
