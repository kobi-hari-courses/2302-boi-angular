import { Component } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: []
})
export class CalcComponent {
  result = 0;
  serviceId: number;
  wrongId: number;

  constructor(
    private additionService: AdditionService, 
    private wrongService: WrongAdditionService){
    this.serviceId = additionService.id;
    this.wrongId = wrongService.id;
  }

  add(a: number, b: number) {
    this.result = this.additionService.add(a, b);
  }

}
