import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log('hoi');
  }

  ngOnInit(): void {
    console.log('hoi');
  }
}
