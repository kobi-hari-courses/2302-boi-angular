import { Component, OnInit, Input, BootstrapOptions, ContentChild } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit {
  isOpen: boolean = true;

  @ContentChild(ExpanderToggleDirective)
  expanderToggle: ExpanderToggleDirective | undefined = undefined;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
