import { createKrewClient } from './api-client';

describe('apiClient', () => {
  it('should be able to retrieve news', async () => {
    const apiClient = createKrewClient({ sandbox: true });

    // login
    await apiClient.auth().login(process.env.LOGIN_USER, process.env.LOGIN_PWD);

    const news = await apiClient.news().all();

    expect(news.length).toBeGreaterThan(0);
  });
});
