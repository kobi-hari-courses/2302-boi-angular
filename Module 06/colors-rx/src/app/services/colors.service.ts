import { Injectable } from '@angular/core';
import { ALLCOLORS } from '../models/all-colors';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private allColors!: Color[];

  constructor() {
    this.allColors = Object.keys(ALLCOLORS).map((key) => ({
      code: key,
      displayName: ALLCOLORS[key],
    }));
  }

  // pure 
  private _colorsWithName(name: string): Color[] {

    name = name.toLowerCase();

    return this.allColors
      .filter(clr => clr.displayName.toLowerCase().includes(name));
  }

  search(keyword: string): Color[] {    
    console.log('searching for ', keyword);

    if (!keyword) return [];

    return this._colorsWithName(keyword);
  }


}
