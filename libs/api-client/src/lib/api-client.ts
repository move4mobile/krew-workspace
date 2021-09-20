import { Config } from './core';
import { NewsService, AgendaService, AuthService, MeService } from './services';

export * from './core';

export interface IKrewClient {
  auth(): AuthService;
  me(): MeService;
  news(): NewsService;
  agenda(): AgendaService;
}

export default function createKrewClient(config: Config): IKrewClient {
  const _authService = new AuthService(config);
  const _meService = new MeService(config);
  const _newsService = new NewsService(config);
  const _agendaService = new AgendaService(config);

  return {
    auth: () => _authService,

    me: () => _meService,

    news: () => _newsService,

    agenda: () => _agendaService,
  };
}

export { createKrewClient };
