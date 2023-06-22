import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStudentComponent } from './pages/view-student/view-student.component';
import { ListStudentsComponent } from './pages/list-students/list-students.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';

const routes: Routes = [
  { path: '', component: ListStudentsComponent },
  { path: 'view', component: ViewStudentComponent },
  { path: 'edit', component: EditStudentComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'list', component: ListStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
