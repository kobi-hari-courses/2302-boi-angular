import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movieCaption$!: Promise<string[]>;

  constructor(
    private dataService: DataService, 
    private router: Router) { }

  ngOnInit(): void {
    this.movieCaption$ = this.dataService.getMovieCaptions();
  }

  goToMovie(index: number) {
    this.router.navigate(['movies', index])
  }

}
