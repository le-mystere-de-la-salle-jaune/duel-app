import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireComponentComponent } from './stagiaire-component.component';

describe('StagiaireComponentComponent', () => {
  let component: StagiaireComponentComponent;
  let fixture: ComponentFixture<StagiaireComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagiaireComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
