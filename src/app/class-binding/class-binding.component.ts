import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2 class="text-success">Angular Training</h2> 
  <h2 [class]="successClass">Angular Training - Class Property</h2>   
  <h2 class="text-special" [class]="successClass">Angular Training - Attribute and Class Property- Attribute becomes dummy</h2> 
  <h2 [class.text-danger]="hasError">Angular Training - Class Property- Conditional Class</h2> 
  <h2 [class]="messageClasses">Angular Training- ngClass Directive</h2>
  <h2 [ngClass]="messageClasses">Angular Training- ngClass Directive- Allows you to dynamically add or remove classes based on conditions</h2>   
  `,
  styles:[`
    .text-success{
      color:green;
      }
      .text-danger{
      color:red;
      }
      .text-special{
      font-style:italic;
      }
      `]
})
export class ClassBindingComponent implements OnInit {
  name="Eswar"
  successClass="text-success"
  hasError=true
  isSpecial=true
  messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
