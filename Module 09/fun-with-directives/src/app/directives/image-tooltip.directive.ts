import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImageTooltipDirective {

  @Input('src')
  @HostBinding('title')
  src: string = '';

  constructor() { }

}
