import { createKrewClient } from './api-client';

describe('apiClient', () => {
  it('should work', () => {
    expect(createKrewClient({})).toBeDefined();
  });
});
