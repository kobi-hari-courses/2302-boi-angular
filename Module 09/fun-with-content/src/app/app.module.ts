import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { BlankComponent } from './components/blank/blank.component';
import { ExpanderToggleDirective } from './components/expander/expander-toggle.directive';
import { ExpanderToggleComponent } from './components/expander/expander-toggle/expander-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpanderComponent,
    BlankComponent,
    ExpanderToggleDirective,
    ExpanderToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
