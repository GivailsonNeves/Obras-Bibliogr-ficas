import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

  @Input("names") listNamesAuthors: string[];
  constructor() { }

  ngOnInit() {
  }

}
