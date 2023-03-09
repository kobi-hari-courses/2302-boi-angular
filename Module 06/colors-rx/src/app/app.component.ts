import { Component } from '@angular/core';
import { BehaviorSubject, debounceTime, delay, filter, map, Observable } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search$ = new BehaviorSubject<string>('');

  results$: Observable<Color[]> = this.search$.pipe(
    debounceTime(500),
    map(keyword => this.colorsService.search(keyword))
  );


  constructor(private colorsService: ColorsService){}

}
