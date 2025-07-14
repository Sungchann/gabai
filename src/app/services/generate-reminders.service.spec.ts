import { TestBed } from '@angular/core/testing';

import { GenerateRemindersService } from './generate-reminders.service';

describe('GenerateRemindersService', () => {
  let service: GenerateRemindersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateRemindersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
