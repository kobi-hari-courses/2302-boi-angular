import { Injectable } from '@angular/core';
import { ALL_MOVIES } from '../models/all-movies';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {  

  constructor() { }

  async getMoviesCount(): Promise<number> {
    return ALL_MOVIES.length;
  }

  async getMovieByIndex(index: number): Promise<Movie> {
    return ALL_MOVIES[index];
  }

  async getMovieCaptions(): Promise<string[]> {
    const res = ALL_MOVIES.map(m => m.caption);
    return res;
  }
}
