export * from './core';
import { Config } from './core';
import { NewsService, AgendaService } from './services';

export default function createKrewClient(config: Config) {
  const _newsService = new NewsService(config);
  const _agendaService = new AgendaService(config);

  return {
    news: () => _newsService,

    agenda: () => _agendaService,
  };
}

export { createKrewClient };
