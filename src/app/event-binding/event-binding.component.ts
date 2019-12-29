import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: ` 
  <h2>Angular Training</h2>
  <button (click)="onClick()">Click Here</button>
  <h2>Welcome {{name}}</h2>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  name="";
  constructor() { }

  ngOnInit() {
  }
  onClick()
  {
    console.log("Welcome to Angular Training")
    this.name="Eswar"
  }

}
