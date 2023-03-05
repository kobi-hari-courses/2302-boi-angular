import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, of, ReplaySubject, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }

  createObserver(id: string): Observer<number> {
    return {
      next: (val: number) => console.log(`observer ${id} next ${val}`),
      complete: () => console.log(`observer ${id} complete`),
      error: (err: any) => console.log(`observer ${id} error ${err}`),
    };
  }

  createOfObservable(): Observable<number> {
    return of(42, 100, 200);
  }

  createTimerObservable(): Observable<number> {
    return timer(1000, 500);
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomColdObservable(): Observable<number> {
    return new Observable(observer => {
      observer.next(42);
      setTimeout(() => observer.next(100), 2000);
      setTimeout(() => observer.next(200), 4000);
      setTimeout(() => observer.next(300), 6000);
      setTimeout(() => observer.next(Math.ceil(Math.random() * 100)), 8000);
      setTimeout(() => observer.complete(), 10000);
    });
  }

  createCustomHotObservable(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.next(Math.ceil(Math.random() * 10000)), 8000);
    setTimeout(() => subject.complete(), 10000);


    return subject;
  }

  createHotInterval(): Observable<number> {
    const cold = interval(1000);
    const subject = new Subject<number>();
    cold.subscribe(subject);
    return subject;
  }

  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.next(Math.ceil(Math.random() * 10000)), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createCustomReplaySubject(): Observable<number> {
    const subject = new ReplaySubject<number>(2);

    subject.next(42);
    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.next(Math.ceil(Math.random() * 10000)), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');

    const observable = this.createCustomReplaySubject();

    console.log('Observer A subscribed');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Observer B subscribed');
      observable.subscribe(observerB);
    }, 2500);

    setTimeout(() => {
      console.log('Observer C subscribed');
      observable.subscribe(observerC);
    }, 11000)
  }
}
