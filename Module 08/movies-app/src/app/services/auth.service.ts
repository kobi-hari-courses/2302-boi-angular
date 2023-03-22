import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export type UserType = 'Guest' | 'Admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn: boolean = false;
  private _isLoggedIn$ = new BehaviorSubject(this._isLoggedIn);

  constructor() { }

  login() {
    this._isLoggedIn = true;
    this._isLoggedIn$.next(this._isLoggedIn);
  }

  logout() {
    this._isLoggedIn = false;
    this._isLoggedIn$.next(this._isLoggedIn);
  }

  isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  userType(): Observable<UserType> {
    return this.isLoggedIn().pipe(
      map(val => val ? 'Admin' : 'Guest')
    );
  }
}
