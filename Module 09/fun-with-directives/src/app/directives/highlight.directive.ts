import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]', 
  exportAs: 'marker'
})
export class HighlightDirective {

  public clickCount = 0;

  private _color: string = 'lime';

  @Input()
  get color(): string {return this._color;}
  set color(value: string) {
    this._color = value;
    this.bg = value;
  }


  @HostBinding('style.background') 
  bg: string = this.color;


  @HostListener('click')
  onClick() {
    this.clickCount++;

    if (this.clickCount === 1) {
      this.bg = 'yellow';
    } else if (this.clickCount === 2) {
      this.bg = 'rgba(255, 255, 0, 0.3)'
    } else {
      this.bg = '';
      this.vanished.emit(this.color);
    }
  }

  @Output()
  vanished = new EventEmitter<string>();


  constructor(
    private host: ElementRef<HTMLElement>, 
    private renderer: Renderer2
    
    ) {
    // 1. accessing the DOM directly - this is the worst way
    // NO NO, Never access the DOM directly
    // host.nativeElement.style.backgroundColor = 'yellow';

    // 2. Using the Renderer - its ok but not ideal
    // this.renderer.setStyle(host.nativeElement, 'background', 'pink');

  }

}
