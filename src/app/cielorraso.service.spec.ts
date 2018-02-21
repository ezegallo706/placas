import { TestBed, inject } from '@angular/core/testing';

import { CielorrasoService } from './cielorraso.service';

describe('CielorrasoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CielorrasoService]
    });
  });

  it('should be created', inject([CielorrasoService], (service: CielorrasoService) => {
    expect(service).toBeTruthy();
  }));
});
