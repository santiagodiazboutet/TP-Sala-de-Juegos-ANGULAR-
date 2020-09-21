import { TestBed } from '@angular/core/testing';

import { PutgetService } from './putget.service';

describe('PutgetService', () => {
  let service: PutgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
