import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login.component';

export const authRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent],
})
export class AuthModule {}
