import { Component } from '@angular/core';
import { filter, interval, map, Observable, Observer, skip, skipLast, Subscription, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createObserver<T>(id: string): Observer<T> {
    return {
      next: (val: T) => console.log(`Observer ${id} next ${val}`), 
      complete: () => console.log(`Observer ${id} complete`), 
      error: (err: any) => console.log(`Observer ${id} error ${err}`), 
    }
  }

  subscribeObserver<T>(observable: Observable<T>, id: string): Subscription {
    const observer = this.createObserver<T>(id);
    return observable.subscribe(observer);
  }


  go() {

    const source$ = interval(1000).pipe();
    const controller$ = timer(4500);

    const res$ = source$.pipe(
      takeUntil(controller$)
    );

    this.subscribeObserver(source$, 'source');
    this.subscribeObserver(controller$, 'controller');
    this.subscribeObserver(res$, 'result');

  }
}
