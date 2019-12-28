import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<div> 
              <h2>
              {{name}}
              </h2>
              <input type="text" value="Eswar">
            <div>`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  public name="Angular Training"
  constructor() { }

  ngOnInit() {
  }

}
