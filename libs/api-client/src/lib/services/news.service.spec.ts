import { createKrewClient, NewsItemStatus } from '../api-client';

let apiClient;

beforeEach(async () => {
  apiClient = createKrewClient({ sandbox: true });

  // login
  await apiClient.auth().login(process.env.LOGIN_USER, process.env.LOGIN_PWD);
});

describe('NewsService', () => {
  it('should be able to retrieve news', async () => {
    const news = await apiClient.news().all({
      status: NewsItemStatus.PUBLISHED,
      offset: 0,
      limit: 3,
    });

    expect(news.length).toBe(3);
  });

  it('should have properties', async () => {
    const item = (await apiClient.news().all({ status: NewsItemStatus.PUBLISHED, limit: 1 }))[0];

    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('date');
    expect(item).toHaveProperty('status');
  });
});
