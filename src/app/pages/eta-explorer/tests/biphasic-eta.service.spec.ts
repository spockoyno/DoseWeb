import { TestBed } from '@angular/core/testing';

import { BiphasicHillEtaService } from '../services/biphasic-hill-eta.service';

describe('BiphasicEtaService', () => {
  let service: BiphasicHillEtaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiphasicHillEtaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
