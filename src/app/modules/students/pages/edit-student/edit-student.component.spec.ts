import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentComponent } from './edit-student.component';
import { StudentFormComponent } from '../../components/student-form/student-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditStudentComponent,
        StudentFormComponent
      ],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
