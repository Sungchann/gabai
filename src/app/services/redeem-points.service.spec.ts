import { TestBed } from '@angular/core/testing';

import { RedeemPointsService } from './redeem-points.service';

describe('RedeemPointsService', () => {
  let service: RedeemPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedeemPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
