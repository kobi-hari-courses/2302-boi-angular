import { Component, Injector } from '@angular/core';
import { AdditionService } from './services/addition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myInjector: Injector) { }


  createInjector() {
    const inj = Injector.create({
      providers: [{
        provide: AdditionService, 
        useClass: AdditionService
      }],
      name: 'kobi',
      parent: this.myInjector
    });

    const additionService = inj.get(AdditionService);
    console.log('Addition Service = ', additionService);
  }
}
