import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MovieEditComponent } from "./components/movie-edit/movie-edit.component";
import { MoviesContainerComponent } from "./components/movies-container/movies-container.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MoviesRoutingModule } from "./movies-routing.module";

@NgModule({
    declarations: [
        MoviesListComponent, 
        MoviesContainerComponent, 
        MovieDetailsComponent, 
        MovieEditComponent
    ],
    imports: [
        CommonModule, 
        MoviesRoutingModule
    ]
})
export class MoviesModule {

}