import { Component } from '@angular/core';
import { BehaviorSubject, debounceTime, delay, filter, map, merge, mergeAll, Observable, of, switchAll } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search$ = new BehaviorSubject<string>('');
  results$: Observable<Color[]>;
  isBusy$: Observable<boolean>;



  constructor(private colorsService: ColorsService){
    const res = this.search$.pipe(
      map(keyword => this.colorsService.search(keyword)), 
      switchAll()
    );

    this.results$ = res; 
    
    const true$ = this.search$.pipe(map(_ => true));
    const false$ = this.results$.pipe(map(_ => false));
    this.isBusy$ = merge(true$, false$);

  }
}
