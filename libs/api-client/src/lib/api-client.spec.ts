import { createKrewClient } from './api-client';

describe('apiClient', () => {
  it('should work', () => {
    expect(createKrewClient({ apiKey: '' })).toBeDefined();
  });
});
