import { Component, Input } from '@angular/core';

@Component({
  selector: 'authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent {

  @Input("names") listNamesAuthors: string[];
  constructor() { }
}
