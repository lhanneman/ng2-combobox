import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  optionsA = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 
  //  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
  optionAValueProp = 'value';
  optionALabelProp = 'label';
  optionASelectedValue = '';
  optionBSelectedValue = '';
  optionCSelectedValue = '';


  optionsA = [
    {
      'label': 'one',
      'value': 1
    },
    {
      'label': 'two this is a longer value lets see how it displays ',
      'value': 2
    },
    {
      'label': 'three',
      'value': 3
    },
    {
      'label': 'four',
      'value': 4
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
    {
      'label': 'five',
      'value': 5
    },
  ];

  optionsB = ['oranges', 'apples', 'bananas'];
  optionsC = ['Ford', 'Chevrolet', 'Subaru', 'Toyota'];

  separatorLabel = "name";
  dividerLabel = 'name';
  dividerFilterProp = 'separator';


  separators = [
    {
      'id': 1,
      'name': 'Ford',
    },
    {
      'id': 3,
      'name': 'Subaru',
    },
    {
      'id': 6,
      'name': 'Dodge',
    },
  ];

  dividers = [
    {
      'id': 1,
      'name': 'Focus',
      'separator': 'Ford'
    },
    {
      'id': 3,
      'name': 'Legacy',
      'separator': 'Subaru'
    },
    {
      'id': 6,
      'name': 'Charger',
      'separator': 'Dodge'
    },
    {
      'id': 6,
      'name': 'Unknown (any sep)',
      'separator': ''
    },
  ];

  setOptionAValue(selectedOption) {
    this.optionASelectedValue = selectedOption.label + " (" + selectedOption.value + ")";
  }
  setOptionBValue(selectedOption) {
    this.optionBSelectedValue = selectedOption.label + " (" + selectedOption.value + ")";
  }
   setOptionCValue(selectedOption) {
    this.optionCSelectedValue = selectedOption.label + " (" + selectedOption.value + ")";
  }
}
