import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { QuizSelectors } from 'src/app/redux';
import { ProgressViewModel } from './progress.vm';
import { buildViewModel } from './progress.helpers';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  vm$!: Observable<ProgressViewModel>;

  constructor(private store: Store<any>){}

  ngOnInit(): void {
    const questions$ = this.store.select(QuizSelectors.allQuestions);
    const answers$ = this.store.select(QuizSelectors.allAnswers);

    const both$ = combineLatest([questions$, answers$]);
    this.vm$ = both$.pipe(
      map(pair => buildViewModel(...pair))
    );

  }

}
