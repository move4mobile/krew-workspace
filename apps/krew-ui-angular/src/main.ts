import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@krew/shared/environments';

if (environment.production) {
  enableProdMode();
}

// TODO: remove before merging
console.log(`Api URL: ${environment.apiUrl}`);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
