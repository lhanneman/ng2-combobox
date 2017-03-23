import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2ComboboxComponent } from './ng2-combobox.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        Ng2ComboboxComponent
    ],
    exports: [
        Ng2ComboboxComponent
    ]
})
export class Ng2ComboboxModule { }