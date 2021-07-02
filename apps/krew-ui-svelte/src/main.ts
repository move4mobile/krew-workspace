import { environment } from '@krew/shared/environments';

console.log(`Is prod mode? ${environment.production}`);

import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'krew-ui-svelte',
  },
});

export default app;
