import { createKrewClient } from '../api-client';

let apiClient;

beforeEach(async () => {
  apiClient = createKrewClient({ sandbox: true });

  // login
  await apiClient.auth().login(process.env.LOGIN_USER, process.env.LOGIN_PWD);
});

describe('meService', () => {
  it('should be able to retrieve me', async () => {
    const me = await apiClient.me().get();

    expect(me).toHaveProperty('id');
    expect(me).toHaveProperty('email');
    expect(me).toHaveProperty('firstName');
    expect(me).toHaveProperty('lastName');

    expect(me['first_name']).toBeUndefined();
    expect(me['last_name']).toBeUndefined();
  });
});
