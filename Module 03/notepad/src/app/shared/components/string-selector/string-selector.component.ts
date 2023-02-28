import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sha-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent {
  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  @Output()
  selection = new EventEmitter<string>();

  onSelect(value: string) {
    this.selection.emit(value);
  }

}
