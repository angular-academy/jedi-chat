import { TestBed, inject } from '@angular/core/testing';

import { MessageTimerService } from './message-timer.service';

describe('MessageTimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageTimerService]
    });
  });

  it('should be created', inject([MessageTimerService], (service: MessageTimerService) => {
    expect(service).toBeTruthy();
  }));
});
