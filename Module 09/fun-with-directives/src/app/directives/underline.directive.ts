import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective implements OnChanges {

  @Input('underline')
  color: string = 'purple';

  @HostBinding('style.text-decoration')
  trueUnderline: string = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('underline directive on changes', changes);
    this.trueUnderline = `${this.color} underline`;
  }

}
