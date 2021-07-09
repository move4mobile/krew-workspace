export * from './core';
import { News, Calendar } from './services';

export default function createKrewClient(options: any) {
  return {
    news: new News({ apiKey: '' }),

    calendar: new Calendar({ apiKey: '' }),
  };
}

export { createKrewClient };
