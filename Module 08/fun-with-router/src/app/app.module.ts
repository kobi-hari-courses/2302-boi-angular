import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageAComponent } from './components/pages/page-a/page-a.component';
import { PageBComponent } from './components/pages/page-b/page-b.component';
import { PageCComponent } from './components/pages/page-c/page-c.component';
import { ToolbarComponent } from './components/parts/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
