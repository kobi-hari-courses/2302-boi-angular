import { Component, OnInit, Optional } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Component({
  selector: 'button[expander-toggle]',
  templateUrl: './expander-toggle.component.html',
  styleUrls: ['./expander-toggle.component.css']
})
export class ExpanderToggleComponent implements OnInit {

  constructor(@Optional() public parentExpander: ExpanderComponent | null) { }

  ngOnInit(): void {
  }

}
