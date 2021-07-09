import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { createKrewClient, NewsItem } from '@krew/api-client';

const item: Partial<NewsItem> = {
  id: '1',
  title: 'first',
};

console.log('item', item);

const apiClient = createKrewClient({});

console.log(apiClient.news.all());
console.log(apiClient.news.get('1'));

console.log(apiClient.calendar.all());

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
