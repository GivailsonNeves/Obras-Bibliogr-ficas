import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsListComponent } from './authors-list.component';
import { AuthorNamePipe } from 'src/app/pipes/author-name.pipe';
import { Component } from '@angular/core';
import { AuthorUtil } from 'src/app/utils/author-util';

const LIST_NAMES: string[] = ["João da Silva", "Givailson de Souza Neves", "Pedro", "Emílio das neves Neto", "PEDRO ALCANTARA"];
@Component({
  template: `<authors-list [names]="listNames"></authors-list>`
})
class AuthorsListComponentTest {
  listNames: string[] = LIST_NAMES;
}

describe('AuthorsListComponent', () => {
  let component: AuthorsListComponent;
  let fixture: ComponentFixture<AuthorsListComponent>;

  let componentTest: AuthorsListComponentTest;
  let fixtureTest: ComponentFixture<AuthorsListComponentTest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorNamePipe,
        AuthorsListComponent,
        AuthorsListComponentTest,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureTest = TestBed.createComponent(AuthorsListComponentTest);
    componentTest = fixtureTest.componentInstance;
    fixtureTest.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use as tag', () => {
    expect(componentTest).toBeTruthy();
  });

  it('should render authors name', () => {
    const compiled = fixtureTest.debugElement.nativeElement;
    const elements = compiled.querySelectorAll('li');
    expect(elements.length).toBe(5);
    expect(elements[0].textContent).toContain( AuthorUtil.formatName(LIST_NAMES[0]));
  });

});
