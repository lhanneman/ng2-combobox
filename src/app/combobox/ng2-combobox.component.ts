import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng2-combobox',
  templateUrl: './ng2-combobox.component.html',
  styleUrls: ['./ng2-combobox.component.css']
})
export class Ng2ComboboxComponent {
    @Input() options: Array<string>;
}