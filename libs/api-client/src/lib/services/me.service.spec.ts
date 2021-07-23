import { createKrewClient } from '../api-client';

describe('meService', () => {
  it('should be able to retrieve me', async () => {
    const apiClient = createKrewClient({ sandbox: true });

    // login
    await apiClient.auth().login(process.env.LOGIN_USER, process.env.LOGIN_PWD);

    const me = await apiClient.me().get();
    console.log(me);

    expect(me.id).toBeDefined();
  });
});
