import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { NewStudentComponent } from './pages/new-student/new-student.component';
import { ViewStudentComponent } from './pages/view-student/view-student.component';
import { ListStudentsComponent } from './pages/list-students/list-students.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentsGridComponent } from './components/students-grid/students-grid.component';
import { StudentFilterComponent } from './components/student-filter/student-filter.component';


@NgModule({
  declarations: [
    NewStudentComponent,
    ViewStudentComponent,
    ListStudentsComponent,
    EditStudentComponent,
    StudentFormComponent,
    StudentsGridComponent,
    StudentFilterComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
