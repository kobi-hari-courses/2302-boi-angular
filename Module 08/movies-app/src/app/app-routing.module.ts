import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/pages/account/account.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieDetailsComponent } from './components/pages/movie-details/movie-details.component';
import { MovieEditComponent } from './components/pages/movie-edit/movie-edit.component';
import { MoviesListComponent } from './components/pages/movies-list/movies-list.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'movies/:id/edit', component: MovieEditComponent}, 
  { path: 'movies/:id', component: MovieDetailsComponent}, 
  { path: 'movies', component: MoviesListComponent},
  { path: 'acount', component: AccountComponent}, 
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
