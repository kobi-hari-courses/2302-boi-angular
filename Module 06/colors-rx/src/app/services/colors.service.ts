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

  private _delay(millis: number): Promise<void> {
    return new Promise((res) => setTimeout(res, millis));
  }

  async search(keyword: string): Promise<Color[]> {    
    console.log('searching for ', keyword);

    await this._delay(3000);

    if (!keyword) return [];

    console.log('completed search for ', keyword);
    return this._colorsWithName(keyword);
  }


}
