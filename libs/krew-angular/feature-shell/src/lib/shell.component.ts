import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `<div class="min-h-screen bg-green-200 pb-24">
      <h1 class="p-8 text-lg flex justify-center border border-gray-300 bg-gray-50">Welkom in Krew - Angular</h1>
      <main>Content goes here</main>
    </div>
    <krew-bottom-bar></krew-bottom-bar> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
