import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuizSelectors } from 'src/app/redux';

@Component({
  selector: 'app-quiz-done',
  templateUrl: './quiz-done.component.html',
  styleUrls: ['./quiz-done.component.css']
})
export class QuizDoneComponent implements OnInit {

  score$!: Observable<number>;

  constructor(private store: Store<any>){}

  ngOnInit(): void {
    this.score$ = this.store.select(QuizSelectors.score);
  }

}
