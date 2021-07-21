import { createKrewClient, NewsItemStatus } from '../api-client';

describe('apiClient', () => {
  it('should be able to retrieve agenda items', async () => {
    const apiClient = createKrewClient({ sandbox: true });

    // login
    await apiClient.auth().login(process.env.LOGIN_USER, process.env.LOGIN_PWD);

    const agendaItems = await apiClient.agenda().all({
      from: '2021-06-01',
      to: '2021-07-01',
    });

    expect(agendaItems.length).toBeGreaterThan(0);
  });
});
