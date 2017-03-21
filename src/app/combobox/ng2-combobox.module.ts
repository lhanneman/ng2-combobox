import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2ComboboxComponent } from './ng2-combobox.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        Ng2ComboboxComponent
    ],
    exports: [
        Ng2ComboboxComponent
    ]
})
export class Ng2ComboboxModule { }