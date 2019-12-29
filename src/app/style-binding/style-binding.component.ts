import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: ` <h2>Welcome {{name}}</h2>
  <h2>Angular Training</h2>
  <h2 [style.color]="'orange'">Angular Training </h2>
  <h2 [style.color]="hasError?'red':'green'">Angular Training - Conditional Style Binding</h2>
  <h2 [style.color]="highlightColor">Angular Training - Style  Color highlight with Class Property </h2>
  <h2 [ngStyle]="titleStyle">Angular Training- ngStyle directive</h2>
  `,
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  
  name="Eswar"  
  hasError=true
  isSpecial=true
  highlightColor='yellow'

  titleStyle={
    color:"blue",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
