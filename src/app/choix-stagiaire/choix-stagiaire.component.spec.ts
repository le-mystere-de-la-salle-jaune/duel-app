import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixStagiaireComponent } from './choix-stagiaire.component';

describe('ChoixStagiaireComponent', () => {
  let component: ChoixStagiaireComponent;
  let fixture: ComponentFixture<ChoixStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
