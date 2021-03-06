import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BottomBarComponent } from './bottom-bar.component';
import { ShellComponent } from './shell.component';
import { AuthModule, AuthGuard, authRoutes } from '@krew/krew-angular/auth';
// TODO: never to IEnvironment

export const ENVIRONMENT = new InjectionToken<unknown>('environment');

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          component: ShellComponent,
          path: '',
          canActivate: [AuthGuard],
          children: [
            // {
            //   path: '',
            //   pathMatch: 'full',
            //   component: BottomBarComponent,
            // },
            // Any other subnavigation
            // {
            //   path: '',
            //   pathMatch: 'full',
            //   component: BottomBarComponent,
            // },
          ],
        },
        {
          path: 'auth',
          children: authRoutes,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    AuthModule,
  ],
  exports: [RouterModule],
  declarations: [BottomBarComponent, ShellComponent],
})
export class FeatureShellModule {
  static withEnvironment(environment: unknown): ModuleWithProviders<FeatureShellModule> {
    return {
      ngModule: FeatureShellModule,
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: environment || {},
        },
      ],
    };
  }
}
