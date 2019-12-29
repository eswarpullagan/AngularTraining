import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: ` <h2>Welcome {{name}}</h2>
  <h2>Angular Training</h2>
  <h2 [style.color]="'orange'">Angular Training </h2>`,
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  
  name="Eswar"  
  hasError=true
  isSpecial=true
  constructor() { }

  ngOnInit() {
  }

}
