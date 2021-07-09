import { Component, OnInit } from '@angular/core';

import { createKrewClient } from '@krew/api-client';

@Component({
  selector: 'krew-root',
  template: `
    <h1 class="p-8 text-lg flex justify-center border border-gray-300 bg-gray-50 ">Welkom in Krew - Angular</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const apiClient = createKrewClient({});

    apiClient
      .auth()
      .login('user', 'password')
      .then(() => {
        // console.log();
      });
  }
  title = 'krew-ui-angular';
}
