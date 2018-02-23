import { TestBed, inject } from '@angular/core/testing';

import { RevestimientoService } from './revestimiento.service';

describe('RevestimientoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevestimientoService]
    });
  });

  it('should be created', inject([RevestimientoService], (service: RevestimientoService) => {
    expect(service).toBeTruthy();
  }));
});
