import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
