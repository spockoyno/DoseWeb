import { TestBed } from '@angular/core/testing';

import { DosingService } from '../services/dosing.service';

describe('DosingService', () => {
  let service: DosingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DosingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
