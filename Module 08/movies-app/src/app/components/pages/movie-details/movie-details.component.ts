import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchAll } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Movie>;
  moviesCount: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService, 
    private router: Router
  ) { }

  async ngOnInit() {
    this.moviesCount = await this.dataService.getMoviesCount();

    const id$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );

    this.movie$ = id$.pipe(
      map(id => this.dataService.getMovieByIndex(id)), 
      switchAll()
    )
  }

  async goPrev() {
    const index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index - 1]);
  }

  async goNext() {
    const index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index + 1]);

  }

  async goEdit() {
    const index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index, 'edit']);    
  }

}
