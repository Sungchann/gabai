import { TestBed } from '@angular/core/testing';

import { QuestProgressService } from './quest-progress.service';

describe('QuestProgressService', () => {
  let service: QuestProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
