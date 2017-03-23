import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ng2-combobox',
  templateUrl: './ng2-combobox.component.html',
  styleUrls: ['./ng2-combobox.component.css']
})
export class Ng2ComboboxComponent implements AfterViewInit {
    @Input() options: Array<string>;
    @Input() manualEntry = false;
    @Input() width: string = "200px";
    @Input() autoFilter = false;

    selectedOption: string = "";
    open = false;
    filteredOptions: Array<string> = [];
    currentHoverIndex = -1;

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
      this.filteredOptions = this.options;
      this.cdr.detectChanges();
    }

    focusIn() {
      this.open = true;
    }

    focusOut() {
      setTimeout(() => this.open = false, 250);
    }

    keydown() {
      return this.manualEntry;
    }

    keyup() {
      if (!this.manualEntry) {
        return;
      }
      this.filteredOptions = this.options.filter((option) => option.toLowerCase().indexOf(this.selectedOption) !== -1);
      console.log("filtered options length: " + this.filteredOptions.length);
      this.cdr.detectChanges();
    }

    arrowDown() {
      if (this.currentHoverIndex === (this.filteredOptions.length - 1)) {
        return;
      }
      this.currentHoverIndex += 1;
    }

    arrowUp() {
      if (this.currentHoverIndex === 0) {
        return;
      }
      this.currentHoverIndex -= 1;
    }

    enterPressed() {
      this.selectOption(this.filteredOptions[this.currentHoverIndex]);
    }

    selectOption(option: string) {
      this.selectedOption = option;
      this.open = false;
    }

}