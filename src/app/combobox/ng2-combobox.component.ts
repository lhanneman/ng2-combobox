import { Component, Input, Output, AfterViewInit, ChangeDetectorRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng2-combobox',
  templateUrl: './ng2-combobox.component.html',
  styleUrls: ['./ng2-combobox.component.css']
})
export class Ng2ComboboxComponent implements AfterViewInit {
  @Input() options: Array<string>;
  @Input() manualEntry = false;
  @Input() autoFilter = true;
  @Input() valueProp: string;
  @Input() labelProp: string;
  @Input() connectTo: Ng2ComboboxComponent
  @Input() connectToFilterProp: string;

  @Output() selectionChanged = new EventEmitter();

  selectedOption: string = "";
  open = false;
  filteredOptions: Array<string> = [];
  currentHoverIndex = -1;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.filteredOptions = this.options;
    this.cdr.detectChanges();
  }

  focusIn() {
    this.filterOnConnection();
    this.open = true;
  }

  focusOut() {
    setTimeout(() => this.open = false, 150);
  }

  keydown() {
    return this.manualEntry;
  }

  keyup() {
    if (!this.manualEntry) {
      return;
    }
    this.filterOptions(this.selectedOption, this.labelProp);
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
    this.selectedOption = option[this.labelProp];
    this.selectionChanged.emit(option);
    this.open = false;
  }

  filterOptions(filterValue: string, filterProp: string) {
    this.filterOnConnection();
    this.filteredOptions = this.filteredOptions.filter((option) => option[filterProp].toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
  }

  filterOnConnection() {
    if (this.connectTo && this.connectTo.selectedOption && this.connectToFilterProp) {
      this.filteredOptions = this.options.filter((option) => {
        let thisVal = option[this.connectToFilterProp];
        return thisVal === "" || thisVal.toLowerCase().indexOf(this.connectTo.selectedOption.toLowerCase()) !== -1;
      });
    } else {
      this.filteredOptions = this.options;
    }
  }

  clearSelection() {
    this.selectedOption = '';
  }

}