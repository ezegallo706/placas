import { TestBed, inject } from '@angular/core/testing';

import { CielorrascoService } from './cielorrasco.service';

describe('CielorrascoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CielorrascoService]
    });
  });

  it('should be created', inject([CielorrascoService], (service: CielorrascoService) => {
    expect(service).toBeTruthy();
  }));
});
