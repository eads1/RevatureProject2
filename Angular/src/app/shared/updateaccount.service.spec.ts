import { TestBed, inject } from '@angular/core/testing';

import { UpdateaccountService } from './updateaccount.service';

describe('UpdateaccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateaccountService]
    });
  });

  it('should be created', inject([UpdateaccountService], (service: UpdateaccountService) => {
    expect(service).toBeTruthy();
  }));
});
