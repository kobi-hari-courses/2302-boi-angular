import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuizActions, QuizSelectors } from './redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDone$!: Observable<boolean>;

  constructor(private store: Store<any>){}

  ngOnInit(): void {
    this.isDone$ = this.store.select(QuizSelectors.isDone);
  }

  reset() {
    const action = QuizActions.reset();
    this.store.dispatch(action);
  }
}
