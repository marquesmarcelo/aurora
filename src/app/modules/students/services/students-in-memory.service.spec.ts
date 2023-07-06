import { TestBed } from '@angular/core/testing';

import { StudentsInMemoryService } from './students-in-memory.service';

describe('StudentsInMemoryService', () => {
  let service: StudentsInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
