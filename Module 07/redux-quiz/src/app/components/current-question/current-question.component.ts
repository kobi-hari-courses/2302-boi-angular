import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Question } from 'src/app/models/question.model';
import { currentQuestion } from 'src/app/redux/quiz.selectors';

@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.css']
})
export class CurrentQuestionComponent implements OnInit {
  currentQuestion$!: Observable<Question>;

  constructor(private store: Store<any>){}


  ngOnInit(): void {
    this.currentQuestion$ = this.store.select(currentQuestion);
  }

}
