import { News } from './news';
import { applyMixins } from './utils';
import { Base } from './base';

// Export types
export * from './news/types';

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
