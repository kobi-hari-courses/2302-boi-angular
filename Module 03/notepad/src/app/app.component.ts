import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red',  'green', 'blue', 'purple', 'brown'];
  fonts = ['Tahoma', 'Arial', 'Verdana', 'Consolas', 'Segoe UI', 'Times new Roman'];
  sizes = ['16px', '20px', '24px', '32px', '40px', '70px'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  setColor(value: string) {
    this.selectedColor = value;
  }

  setSize(value: string) {
    this.selectedSize = value;
  }

  setFont(value: string) {
    this.selectedFont = value;
  }
}
