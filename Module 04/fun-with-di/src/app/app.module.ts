import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { AdditionService } from './services/addition.service';
import { GroupComponent } from './components/group/group.component';
import { WrongAdditionService } from './services/wrong-addition.service';
import { PREFIX } from './tokens/prefix-token';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: AdditionService, 
      useExisting: WrongAdditionService
    },
    {
      provide: WrongAdditionService, 
      useClass: WrongAdditionService
    }, 
    {
      provide: PREFIX, 
      useValue: () => {
        const date = new Date();
        const hrs = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
        return `${hrs}:${min}:${sec}`
      }
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
