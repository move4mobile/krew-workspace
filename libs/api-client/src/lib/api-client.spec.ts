import { createKrewClient } from './api-client';

describe('apiClient', () => {
  it('should work', () => {
    expect(createKrewClient({ sandbox: true })).toBeDefined();
  });

  it('should be able to fail login', async () => {
    const apiClient = createKrewClient({ sandbox: true });

    expect(await apiClient.auth().login('demo@move4mobile.com', '<enter password>')).toThrowError('Unauthorized');
  });
});
