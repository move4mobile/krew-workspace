import { createKrewClient } from './api-client';

describe('apiClient', () => {
  it('should work', () => {
    expect(createKrewClient({ sandbox: true })).toBeDefined();
  });

  // it('should be able to fail login', async () => {
  //   const apiClient = createKrewClient({ sandbox: true });

  //   // login
  //   await apiClient.auth().login(process.env.LOGIN_USER, process.env.LOGIN_PWD);

  //   expect(apiClient).toThrowError('Unauthorized');
  // });
});
