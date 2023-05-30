import { TestBed } from '@angular/core/testing';

import { LocationlibraryService } from './locationlibrary.service';

describe('LocationlibraryService', () => {
  let service: LocationlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
