import { TestBed, inject } from '@angular/core/testing';

import { GetMarbelDetailsService } from './get-marbel-details.service';

describe('GetMarbelDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMarbelDetailsService]
    });
  });

  it('should be created', inject([GetMarbelDetailsService], (service: GetMarbelDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
