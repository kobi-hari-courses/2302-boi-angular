import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable({
    providedIn: 'root'
})
export class WrongAdditionService {
    id: number;

    constructor(private historyService: HistoryService) {
        this.id = Math.ceil(Math.random() * 1000000);
        console.log('Wrong Addition Service Created, id = ', this.id);
    }


    add(a: number, b: number) {
        this.historyService.audit(`Wrong Addition Service add: (${a}, ${b})`);
        return a + b + 1;
    }
}