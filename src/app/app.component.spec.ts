import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormAuthorsComponent } from './components/form-authors/form-authors.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorNamePipe } from './pipes/author-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormNumberComponent,
        FormAuthorsComponent,
        AuthorsListComponent,
        AuthorNamePipe,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Obras-Bibliogr-ficas'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Obras-Bibliogr-ficas');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Obras-Bibliogr-ficas!');
  // });
});
