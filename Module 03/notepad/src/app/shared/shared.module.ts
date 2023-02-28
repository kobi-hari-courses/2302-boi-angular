import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StringSelectorComponent } from "./components/string-selector/string-selector.component";

@NgModule({
    declarations: [
        StringSelectorComponent
    ], 
    imports: [
        CommonModule
    ],
    exports: [
        StringSelectorComponent
    ]
    
})
export class SharedModule {

}