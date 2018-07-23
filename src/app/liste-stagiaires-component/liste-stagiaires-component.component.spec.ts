import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStagiairesComponentComponent } from './liste-stagiaires-component.component';

describe('ListeStagiairesComponentComponent', () => {
  let component: ListeStagiairesComponentComponent;
  let fixture: ComponentFixture<ListeStagiairesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeStagiairesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStagiairesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
