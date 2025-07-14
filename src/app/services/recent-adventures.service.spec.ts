import { TestBed } from '@angular/core/testing';

import { RecentAdventuresService } from './recent-adventures.service';

describe('RecentAdventuresService', () => {
  let service: RecentAdventuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentAdventuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
