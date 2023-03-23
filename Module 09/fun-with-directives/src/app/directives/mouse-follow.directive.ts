import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[followMouse]', 
  exportAs: 'mouse'  
})
export class MouseFollowDirective {

  public x: string = '0px';
  public y: string = '0px';

  @HostListener('mousemove', ['$event'])
  whenMouseMoved(ev: MouseEvent) {
    this.x = `${ev.offsetX}px`;
    this.y = `${ev.offsetY}px`;
  }




  constructor() { }

}
