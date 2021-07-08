export * from './core';

import { News } from './services';
// import { Base } from './base';

class Debug {
  ping() {
    return 'pong';
  }
}

export default function createKrewClient(options: any) {
  return {
    debug: new Debug(),

    news: new News({ apiKey: '' }),
  };
}

export { createKrewClient };
