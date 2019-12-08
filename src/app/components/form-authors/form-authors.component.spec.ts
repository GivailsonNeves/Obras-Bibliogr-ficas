import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthorsComponent, IFieldData } from './form-authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const FIELDS: IFieldData[] = [ {name: "field1", label: "Field 1"}, {name: "field2", label: "Field 2"}, {name: "field3", label: "Field 3"}, ];
describe('FormAuthorsComponent', () => {
  let component: FormAuthorsComponent;
  let fixture: ComponentFixture<FormAuthorsComponent>;
  let compiled: any;
  let fields: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FormAuthorsComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthorsComponent);
    component = fixture.componentInstance;
    component.renderForm(FIELDS);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    fields = compiled.querySelectorAll('.form-field');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render fields', () => {
    expect(fields.length).toBe(FIELDS.length);
    expect(fields[0].querySelector('label').textContent).toContain(FIELDS[0].label);
  });

  it('should toggle enabled', () => {
    const button = compiled.querySelector('button');
    expect(button.disabled).toBeTruthy();
    fields.forEach(element => {
      const input = element.querySelector('input');
      input.value = "Givailson Neves junior";
      input.dispatchEvent(new Event('input'));
    });
    fixture.detectChanges();
    expect(button.disabled).toBeFalsy();
  });


});
