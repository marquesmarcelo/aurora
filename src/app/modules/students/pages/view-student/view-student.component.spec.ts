import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentComponent } from './view-student.component';
import { StudentFormComponent } from '../../components/student-form/student-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewStudentComponent,
        StudentFormComponent
      ],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
