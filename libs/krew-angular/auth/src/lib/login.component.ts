import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createKrewClient, IKrewClient } from '@krew/api-client';

@Component({
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  #krewClient: IKrewClient;

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {
    this.#krewClient = createKrewClient({ sandbox: true });
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;

      this.#krewClient
        .auth()
        .login(email, password)
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
