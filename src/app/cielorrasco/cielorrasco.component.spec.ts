import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CielorrascoComponent } from './cielorrasco.component';

describe('CielorrascoComponent', () => {
  let component: CielorrascoComponent;
  let fixture: ComponentFixture<CielorrascoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CielorrascoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CielorrascoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
