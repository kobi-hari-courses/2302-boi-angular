import { Component } from '@angular/core';
import { bufferCount, delay, filter, groupBy, interval, map, merge, mergeAll, Observable, Observer, of, skip, skipLast, Subscription, take, takeLast, takeUntil, timer } from 'rxjs';

interface StockValue {
  name: string;
  value: number;
}

interface Alert {
  name: string;
  from: number;
  to: number;
}

interface Update {
  stocks: StockValue[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createObserver<T>(id: string): Observer<T> {
    return {
      next: (val: T) => console.log(`Observer ${id} next ${JSON.stringify(val)}`), 
      complete: () => console.log(`Observer ${id} complete`), 
      error: (err: any) => console.log(`Observer ${id} error ${err}`), 
    }
  }

  subscribeObserver<T>(observable: Observable<T>, id: string): Subscription {
    const observer = this.createObserver<T>(id);
    return observable.subscribe(observer);
  }


  go() {

    const source$: Observable<StockValue[]> = merge(
      of([{name: 'Apple', value: 100}, {name: 'Microsoft', value: 85}, {name: 'Google', value: 50}]).pipe(delay(1000)), 
      of([{name: 'Apple', value: 90}, {name: 'Microsoft', value: 95}, {name: 'Google', value: 40}]).pipe(delay(2000)), 
      of([{name: 'Apple', value: 70}, {name: 'Microsoft', value: 105}, {name: 'Google', value: 24}]).pipe(delay(3000)), 
      of([{name: 'Apple', value: 75}, {name: 'Microsoft', value: 35}, {name: 'Google', value: 80}]).pipe(delay(4000)), 
      of([{name: 'Apple', value: 205}, {name: 'Microsoft', value: 65}, {name: 'Google', value: 90}]).pipe(delay(5000)), 
      of([{name: 'Apple', value: 180}, {name: 'Microsoft', value: 40}, {name: 'Google', value: 105}]).pipe(delay(6000)), 
      of([{name: 'Apple', value: 140}, {name: 'Microsoft', value: 85}, {name: 'Google', value: 200}]).pipe(delay(7000)), 
    );

      /*
      1. Flatten to Observable<StockValue> => mergeAll 
      2. Group by company name => groupBy (Observable<Observable<StockValue>)

        -----------------------------   -----------------------------
            |                               |
            -------                          **********
            -------                         ***********
            -------                         ***********

      3. inner observables should emit pairs of values, [previous value, current value] Observable<Observable<[StockValue, StockValue]>> (magic operator *)
      4. Filter out pairs that are not "alertable" (filter*)
      5. Convert alertable pairs into Alert objects: Observable<Observable<Alert>> (map*)
      6. Flatten (mergeAll) Observable<Alert>
      */

      const result$ = source$.pipe(
        mergeAll(), 
        groupBy(val => val.name), 
        map(group$ => group$.pipe(
                bufferCount(2, 1), 
                filter(pair => pair.length == 2),
                filter(pair => pair[0].value - pair[1].value >= 20), 
                map(pair => ({
                  from: pair[0].value, 
                  to: pair[1].value, 
                  name: group$.key
                }))
            )), 
        mergeAll()
      );


    this.subscribeObserver(source$, 'source');
    this.subscribeObserver(result$, 'result');

  }
}
