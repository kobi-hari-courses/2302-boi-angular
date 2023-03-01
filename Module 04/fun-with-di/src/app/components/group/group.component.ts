import { Component } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [
    AdditionService
  ]
})
export class GroupComponent {

}
