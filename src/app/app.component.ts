import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthorUtil } from './utils/author-util';
import { IFieldData, FormAuthorsComponent } from './components/form-authors/form-authors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("formAuthors") formAuthors: FormAuthorsComponent;

  listNamesAuthors: string[];
  showAuthorsForm: boolean = false;

  handleTotalNameChanges(totalNames): void {
    this.showAuthorsForm = totalNames > 0;
    let listForms: IFieldData[] = [];
    for (let i = 0; i < totalNames; i++) {
      listForms.push({
        name: `form_${i}`,
        label: `Autor ${i + 1}`
      });
      
    }
    this.formAuthors.renderForm(listForms);
  }

  handleNamesSubmited(listNames: string[]): void {
    this.listNamesAuthors = listNames;
  }

}
