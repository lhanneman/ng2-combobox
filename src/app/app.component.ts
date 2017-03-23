import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  optionsA = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];

  optionsB = ['oranges', 'apples', 'bananas'];
  optionsC = ['Ford', 'Chevrolet', 'Subaru', 'Toyota'];
}
