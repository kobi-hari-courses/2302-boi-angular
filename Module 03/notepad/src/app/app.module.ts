import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { XyzModule } from './xyz/xyz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    XyzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
