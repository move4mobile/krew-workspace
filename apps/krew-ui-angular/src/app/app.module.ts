import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FeatureShellModule } from '@krew/krew-angular/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FeatureShellModule.withEnvironment({ initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
