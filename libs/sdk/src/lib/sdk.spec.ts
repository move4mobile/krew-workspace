import { Sdk } from './sdk';

const ApiClient = new Sdk({
  apiKey: process.env.TOKEN,
  basePath: 'https://company-app.develop.m4mapp.com/api/',
});

describe('ClientApi', () => {
  it('should return support getById', async () => {
    const result = await ApiClient.getNewsItem('3a9d8d02-f34e-488e-8f10-aecbc41076d0');
    expect(result).toBeDefined();
  });

  it('should return 5 news items', async () => {
    const result = await ApiClient.getNewsItems();

    expect(result.length).toEqual(5);
  });
});
