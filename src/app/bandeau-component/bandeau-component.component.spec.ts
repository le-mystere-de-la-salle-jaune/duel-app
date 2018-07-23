import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauComponentComponent } from './bandeau-component.component';

describe('BandeauComponentComponent', () => {
  let component: BandeauComponentComponent;
  let fixture: ComponentFixture<BandeauComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeauComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
