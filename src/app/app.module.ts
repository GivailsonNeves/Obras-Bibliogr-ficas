import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormAuthorsComponent } from './components/form-authors/form-authors.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorNamePipe } from './pipes/author-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormNumberComponent,
    FormAuthorsComponent,
    AuthorsListComponent,
    AuthorNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
