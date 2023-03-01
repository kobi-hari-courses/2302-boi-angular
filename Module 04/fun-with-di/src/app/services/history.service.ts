import { Inject, Injectable } from "@angular/core";
import { PREFIX } from "../tokens/prefix-token";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    id: number;
    records: string[] = [];

    constructor(
        @Inject(PREFIX) private prefix: ()=> string
    ) {
        this.id = Math.ceil(Math.random() * 1000000);
        console.log('History Service Created, id = ', this.id);
    }

    audit(txt: string) {
        const record = `${this.prefix()} ${txt}`;
        this.records.push(record);
        console.log('History', this.records);
    }

}