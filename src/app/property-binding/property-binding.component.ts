import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<div> 
              <h2>
              {{name}}
              </h2>
              <input [id]="myId" type="text" value="Eswar">
              <input id="{{myId}}" type="text" value="Eswar">
              <input disabled id="{{myId}}" type="text" value="Eswar">
              <input disabled=false id="{{myId}}" type="text" value="Eswar">
              <input disabled="false" id="{{myId}}" type="text" value="Eswar">
              <input disabled="{{false}}" id="{{myId}}" type="text" value="Eswar">
              <input [disabled]="false" id="{{myId}}" type="text" value="Eswar">
              <input [disabled]="true" id="{{myId}}" type="text" value="Eswar">
              <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Eswar">
              <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Eswar">
            <div>`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  public name="Angular Training"
  public myId="testId"
  public isDisabled=false;
  constructor() { }

  ngOnInit() {
  }

}
