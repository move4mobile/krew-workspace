export * from './core';
import { NewsService, AgendaService } from './services';

export default function createKrewClient(options: any) {
  return {
    news: () => new NewsService({ apiKey: '' }),

    agenda: () => new AgendaService({ apiKey: '' }),
  };
}

export { createKrewClient };
