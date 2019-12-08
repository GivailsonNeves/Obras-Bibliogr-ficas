import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss']
})
export class FormNumberComponent {

  @Output("onChange") onChange: EventEmitter<number> = new EventEmitter();

  totalNames:number = 0;

  constructor() { }

  handleClick() {
    this.onChange.emit(this.totalNames);
  }

}
