import App from './App.svelte';

// TODO: remove before merging
import { environment } from '@krew/shared/environments';
console.log(`Api URL: ${environment.apiUrl}`);

const app = new App({
  target: document.body,
  props: {
    name: 'krew-ui-svelte',
  },
});

export default app;
