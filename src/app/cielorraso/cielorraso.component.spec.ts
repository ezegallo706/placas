import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cielorrasoComponent } from './cielorraso.component';

describe('cielorrasoComponent', () => {
  let component: cielorrasoComponent;
  let fixture: ComponentFixture<cielorrasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cielorrasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cielorrasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
