import { createKrewClient } from './api-client';

describe('apiClient', () => {
  it('should work', () => {
    expect(createKrewClient({}).debug.ping()).toEqual('pong');
  });

  it('news should work', async () => {
    expect((await createKrewClient({}).news.find()).length).toEqual(5);
  });
});
