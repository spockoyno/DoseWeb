import {TestBed} from '@angular/core/testing';

import {UserInputService} from '../services/user-input.service';

describe('UserInputService', () => {
  let service: UserInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
