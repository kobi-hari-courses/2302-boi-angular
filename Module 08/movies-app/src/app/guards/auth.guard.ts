import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  filter,
  first,
  firstValueFrom,
  lastValueFrom,
  Observable,
  take,
} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    console.log('Auth Guard in action');
    const isLoggedIn = await firstValueFrom(this.authService.isLoggedIn());
    console.log('isLoggedIn', isLoggedIn);

    if (isLoggedIn) return true;

    this.authService.isLoggedIn().pipe(
        filter((val) => val === true),
        take(1)
      )
      .subscribe((_) => {
        // go to the address the user was trying to go to
        this.router.navigateByUrl(state.url);
      });

    return this.router.createUrlTree(['account']);
  }
}
