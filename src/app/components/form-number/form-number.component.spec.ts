import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNumberComponent } from './form-number.component';
import { FormsModule } from '@angular/forms';

describe('FormNumberComponent', () => {
  let component: FormNumberComponent;
  let fixture: ComponentFixture<FormNumberComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FormNumberComponent 
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNumberComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toogle button disable', () => {
    const button: any = compiled.querySelector('button');
    const input: any = compiled.querySelector('input');
    input.value = 5;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(button.disabled).toBeFalsy();
    input.value = 0;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(button.disabled).toBeTruthy();
  });

});
