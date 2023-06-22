import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentsComponent } from './list-students.component';
import { StudentFilterComponent } from '../../components/student-filter/student-filter.component';
import { StudentsGridComponent } from '../../components/students-grid/students-grid.component';

describe('ListStudentsComponent', () => {
  let component: ListStudentsComponent;
  let fixture: ComponentFixture<ListStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListStudentsComponent,
        StudentFilterComponent,
        StudentsGridComponent
      ]
    });
    fixture = TestBed.createComponent(ListStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
