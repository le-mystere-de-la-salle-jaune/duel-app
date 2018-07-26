import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStagiaireComponent } from './form-stagiaire.component';

describe('FormStagiaireComponent', () => {
  let component: FormStagiaireComponent;
  let fixture: ComponentFixture<FormStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
