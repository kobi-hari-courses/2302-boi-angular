import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World';

  constructor() {
    console.log('I am AppComponent');
  }

  doSomething() {
    this.title = 'Did something';
  }
}
