import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-with-directives';

  myFavoriteColor = 'magenta';

  whenLiVanished(value: string) {
    console.log('The li highlight vanished, its color was', value)
  }

}
