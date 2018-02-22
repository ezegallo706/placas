import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CielorrasoDetalleComponent } from './cielo-rraso-detalle.component';

describe('CielorrasoDetalleComponent', () => {
  let component: CielorrasoDetalleComponent;
  let fixture: ComponentFixture<CielorrasoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CielorrasoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CielorrasoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
