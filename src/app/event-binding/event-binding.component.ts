import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: ` 
  <h2>Angular Training</h2>
  <button (click)="onClick()">Click Here</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick()
  {
    console.log("Welcome to Angular Training")
  }

}
