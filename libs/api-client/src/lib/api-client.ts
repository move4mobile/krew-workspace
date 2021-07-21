import { Config } from './core';
import { NewsService, AgendaService } from './services';
import { AuthService } from './services/auth.service';

export * from './core';

interface IKrewClient {
  auth(): AuthService;

  news(): NewsService;

  agenda(): AgendaService;
}

export default function createKrewClient(config: Config): IKrewClient {
  const _authService = new AuthService(config);
  const _newsService = new NewsService(config);
  const _agendaService = new AgendaService(config);

  return {
    auth: () => _authService,

    news: () => _newsService,

    agenda: () => _agendaService,
  };
}

export { createKrewClient };
