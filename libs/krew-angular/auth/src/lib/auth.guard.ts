import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { createKrewClient, IKrewClient } from '@krew/api-client';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  client: IKrewClient;

  constructor(private router: Router) {
    this.client = createKrewClient({ sandbox: true });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.client.auth().isLoggedIn) {
      return true;
    } else {
      this.router.navigate([`/auth/login`]);

      return false;
    }
  }
}
