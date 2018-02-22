import { TestBed, inject } from '@angular/core/testing';

import { CieloRrasoService } from './cielorraso.service';

describe('CielorrasoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CieloRrasoService]
    });
  });

  it('should be created', inject([CieloRrasoService], (service: CieloRrasoService) => {
    expect(service).toBeTruthy();
  }));
});
