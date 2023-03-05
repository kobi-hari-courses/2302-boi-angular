import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counter = 0;
  private _counter$ = new BehaviorSubject<number>(this._counter);
  // private _counter$ = new Subject<number>();

  increment() {
    this._counter++;
    this._counter$.next(this._counter);
  }

  decrement() {
    this._counter--;
    this._counter$.next(this._counter);
  }

  getValue() : Observable<number>{
    return this._counter$.asObservable();
  }
}
