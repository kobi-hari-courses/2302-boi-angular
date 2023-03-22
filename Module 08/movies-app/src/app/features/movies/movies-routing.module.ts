import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesContainerComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent },
      {
        path: ':id/edit',
        component: MovieEditComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
