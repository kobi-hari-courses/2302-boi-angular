import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { QUIZ_REDUCER } from './redux/quiz.reducer';
import { QUIZ_FEATURE_KEY } from './redux/quiz.state';
import { CurrentQuestionComponent } from './components/current-question/current-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentQuestionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [QUIZ_FEATURE_KEY]: QUIZ_REDUCER
    }), 
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
