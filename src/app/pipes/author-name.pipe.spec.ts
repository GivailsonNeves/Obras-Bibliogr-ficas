import { AuthorNamePipe } from './author-name.pipe';
import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

const RAW_AUTHOR_NAME: string = "João DE Souza Neves neto";
const EXPECTED_AUTHOR_NAME: string = "NEVES NETO, João de Souza";
@Component({
  template: `<p>{{name | authorName}}</p>`
})
class PipeTest {
  name: string = RAW_AUTHOR_NAME;
}

describe('AuthorNamePipe', () => {
  
  let fixture: ComponentFixture<PipeTest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorNamePipe,
        PipeTest
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTest);
    fixture.detectChanges();
  });

  it('create an instance', () => {
    const pipe = new AuthorNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should be usable', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(EXPECTED_AUTHOR_NAME);
  });
  
});
