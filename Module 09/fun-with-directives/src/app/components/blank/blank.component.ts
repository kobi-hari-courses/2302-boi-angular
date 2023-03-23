import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit, OnChanges {

  @Input()
  color: string = 'blue';

  constructor() { }

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('app-blank on changes', changes);
  }

}
