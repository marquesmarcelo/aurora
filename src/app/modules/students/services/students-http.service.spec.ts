import { TestBed } from '@angular/core/testing';

import { StudentsHttpService } from './students-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentsService', () => {
  let service: StudentsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(StudentsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
