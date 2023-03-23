import { Directive, HostListener, Optional } from '@angular/core';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: 'button[expander-toggle]'
})
export class ExpanderToggleDirective {

  @HostListener('click')
  onClick() {
    console.log('Expander Toggle button was clicked');
    this.expander?.toggle();
  }

  constructor(@Optional() private expander: ExpanderComponent | null) { 

    console.log(expander);

  }

}
