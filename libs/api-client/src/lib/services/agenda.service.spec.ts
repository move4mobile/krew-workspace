import { createKrewClient } from '../api-client';

let apiClient;

beforeEach(async () => {
  apiClient = createKrewClient({ sandbox: true });

  // login
  await apiClient.auth().login(process.env.LOGIN_USER, process.env.LOGIN_PWD);
});

describe('AgendaService', () => {
  it('should be able to retrieve agenda items', async () => {
    const agendaItems = await apiClient.agenda().all({
      from: '2021-06-01',
      to: '2021-07-01',
    });

    expect(agendaItems.length).toBeGreaterThan(0);
  });

  it('should have properties', async () => {
    const item = (await apiClient.agenda().all())[0];

    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('category');
    expect(item).toHaveProperty('startTime');
    expect(item).toHaveProperty('employeesOnly');
    expect(item).toHaveProperty('allDay');

    expect(item['start_time']).toBeUndefined();
  });
});
