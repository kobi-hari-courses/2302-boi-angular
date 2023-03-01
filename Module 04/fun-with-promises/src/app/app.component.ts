import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected resolver: (val: number) => void = () => {};
  protected rejecter: (err: any) => void = () => {};
  isPromiseRuninng = false;

  createPromise(): Promise<number> {
    return new Promise<number>(res => setTimeout(() => res(42), 3000));
  }

  createOtherPromise<T>(millis: number, val: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      setTimeout(() => resolve(val), millis);
    });
  }

  createRandomPromise<T>(val: T): Promise<T> {
    const delay = Math.random() * 4000 + 2000;
    return this.createOtherPromise(delay, val);
  }

  createUserPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.resolver = resolve;
      this.rejecter = reject;

    })
  }

  go_old() {
    console.log('starting');

    const p = this.createPromise();

    const p2 = p.then(val => {
      console.log('Promise Completed with result', val);
      return true;
    });

    console.log('Function GO Ended');
  }

  async go() {
    console.log('started running');
    this.isPromiseRuninng = true;
    const p1 = this.createRandomPromise(40);
    const p2 = this.createRandomPromise('Hello'); 
    const p3 = this.createUserPromise();

    const pall = Promise.all([p1, p2, p3])
    const res = await pall;

    this.isPromiseRuninng = false;
    console.log('All 3 promises completed, with results:', res);
  }

  async start() {
    console.log('A');

    const p = this.createPromise();
    console.log('B');
    const res = await p;

    console.log('C');
    return 'hello';
  }
}
