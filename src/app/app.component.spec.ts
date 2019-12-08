import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormAuthorsComponent } from './components/form-authors/form-authors.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorNamePipe } from './pipes/author-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorUtil } from './utils/author-util';

const LIST_NAMES: string[] = ["João da Silva", "Givailson de Souza Neves", "Pedro", "Emílio das neves Neto", "PEDRO ALCANTARA"];

describe('AppComponent', () => {

  let fixture: any;
  let app: any;
  let compiled: any;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should generate author fields`, fakeAsync(() => {
    const input = compiled.querySelector('#numAuthors');
    const button = compiled.querySelector('#gerarCampos');

    //checar geração dos campos
    input.value = LIST_NAMES.length;
    input.dispatchEvent(new Event('input'));
    button.dispatchEvent(new Event('click'));
    tick();
    fixture.detectChanges();
    const fields = compiled.querySelectorAll('input[type=text]');
    expect(fields.length).toBe(LIST_NAMES.length);
    
    //checar geração dos fields;
    for (let i = 0; i < LIST_NAMES.length; i++) {
      const f = fields[i];
      f.value = LIST_NAMES[i];
      f.dispatchEvent(new Event('input'));
    }
    fixture.detectChanges();
    tick();
    const form = compiled.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    tick();
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(LIST_NAMES.length);

    //checar formatacao
    const lastNameFormated = compiled.querySelectorAll('li')[LIST_NAMES.length -1].textContent;
    expect(lastNameFormated).toBe(AuthorUtil.formatName(LIST_NAMES[LIST_NAMES.length - 1]));

  }));
});
