import { TestBed } from '@angular/core/testing';

import { StudentsFilterService } from './students-filter.service';

describe('StudentsFilterService', () => {
  let service: StudentsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
