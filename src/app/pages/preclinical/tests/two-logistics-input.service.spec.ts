import { TestBed } from '@angular/core/testing';

import { TwoLogisticsInputService } from '../services/two-logistics-input.service';

describe('TwoLogisticsInputService', () => {
  let service: TwoLogisticsInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoLogisticsInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
