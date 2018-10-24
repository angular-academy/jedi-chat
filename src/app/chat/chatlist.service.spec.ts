import { TestBed, inject } from '@angular/core/testing';

import { ChatlistService } from './chatlist.service';

describe('ChatlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatlistService]
    });
  });

  it('should be created', inject([ChatlistService], (service: ChatlistService) => {
    expect(service).toBeTruthy();
  }));
});
