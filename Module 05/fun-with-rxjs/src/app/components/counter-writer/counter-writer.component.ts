import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-writer',
  templateUrl: './counter-writer.component.html',
  styleUrls: ['./counter-writer.component.css']
})
export class CounterWriterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  plus() {
    this.counterService.increment();

  }

  minus() {
    this.counterService.decrement();
  }

}
