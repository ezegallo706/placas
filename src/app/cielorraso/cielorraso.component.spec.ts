import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CieloRrasoComponent } from './cielorraso.component';

describe('CieloRrasoComponent', () => {
  let component: CieloRrasoComponent;
  let fixture: ComponentFixture<CieloRrasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CieloRrasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CieloRrasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
