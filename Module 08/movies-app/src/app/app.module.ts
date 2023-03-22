import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesListComponent } from './components/pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/pages/movie-details/movie-details.component';
import { MovieEditComponent } from './components/pages/movie-edit/movie-edit.component';
import { AccountComponent } from './components/pages/account/account.component';
import { ToolbarComponent } from './components/parts/toolbar/toolbar.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieEditComponent,
    AccountComponent,
    ToolbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
