import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class AdditionService {
    id: number;

    constructor(private historyService: HistoryService) {
        this.id = Math.ceil(Math.random() * 1000000);
        console.log('Addition Service Created, id = ', this.id);
    }


    add(a: number, b: number) {
        this.historyService.audit(`Addition Service add: (${a}, ${b})`);
        return a + b;
    }
}