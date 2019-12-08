import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-authors',
  templateUrl: './form-authors.component.html',
  styleUrls: ['./form-authors.component.scss']
})
export class FormAuthorsComponent {

  @Output("onSubmit") onSubmit: EventEmitter<string[]> = new EventEmitter();
  authorsFormGroup: FormGroup;
  listForms: IFieldData[];

  constructor() { }

  renderForm(fields: IFieldData[]) {
    let group: any = {};
    fields.forEach( d => group[d.name] = new FormControl('', [Validators.required]) );
    this.authorsFormGroup = new FormGroup(group);
    this.listForms = fields;
  }

  handleSubmit(): void {
    const fieldsValues: any = this.authorsFormGroup.value;
    let listNamesAuthors: string[] = [];
    for(let field in fieldsValues) {
      listNamesAuthors.push( fieldsValues[field] );
    }
    this.onSubmit.emit(listNamesAuthors);
  }

}

export interface IFieldData {
  label: string;
  name: string;
}