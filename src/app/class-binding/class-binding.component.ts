import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2 class="text-success">Angular Training</h2> 
  <h2 [class]="successClass">Angular Training - Class Property</h2>   
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
  constructor() { }

  ngOnInit() {
  }

}
