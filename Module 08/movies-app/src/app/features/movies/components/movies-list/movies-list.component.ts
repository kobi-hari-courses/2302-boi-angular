import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movieCaption$!: Promise<string[]>;
  movieId$!: Observable<number | undefined>;

  constructor(
    private dataService: DataService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieCaption$ = this.dataService.getMovieCaptions();
    this.movieId$ = this.route.url.pipe(
      map(_ => Number(this.route.snapshot.firstChild?.params['id']))
    )
  }

  goToMovie(index: number) {
    this.router.navigate(['movies', index])
  }

}
