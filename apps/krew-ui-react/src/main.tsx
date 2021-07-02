import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

// TODO: remove before merging
import { environment } from '@krew/shared/environments';
console.log(`Api URL: ${environment.apiUrl}`);

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
