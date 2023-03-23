import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Blank Component Created');
  }
  ngOnDestroy(): void {
    console.log('Blank Component Destroyed');
  }

  ngOnInit(): void {
  }

}
