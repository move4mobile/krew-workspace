import { Component } from '@angular/core';

@Component({
  selector: 'krew-root',
  template: `
    <h1 class="p-8 text-lg flex justify-center border border-gray-300 bg-gray-50 shadow-md">
      Welkom in Krew - Angular
    </h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'krew-ui-angular';
}
