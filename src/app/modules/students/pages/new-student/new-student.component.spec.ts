import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentComponent } from './new-student.component';
import { StudentFormComponent } from '../../components/student-form/student-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewStudentComponent', () => {
  let component: NewStudentComponent;
  let fixture: ComponentFixture<NewStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewStudentComponent,
        StudentFormComponent
      ],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(NewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
