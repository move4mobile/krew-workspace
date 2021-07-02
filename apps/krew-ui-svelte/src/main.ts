import App from './App.svelte';

import { createKrewClient } from '@krew/api-client';
const apiClient = createKrewClient({});
console.log(apiClient.debug.ping());

const app = new App({
  target: document.body,
  props: {
    name: 'krew-ui-svelte',
  },
});

export default app;
