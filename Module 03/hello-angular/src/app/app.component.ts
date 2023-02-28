import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword: string = 'bla bla';
  isBusy: boolean = false;
  results: string[] = [];

  setKeyword(value: string) {
    this.keyword = value;
  }

  search() {
    this.isBusy = true;
    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword.toUpperCase(), 
        this.keyword.toLowerCase(),
        this.keyword + ' 123'
      ]
    }, 1000);

  }
}
