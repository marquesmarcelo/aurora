import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStudentComponent } from './pages/view-student/view-student.component';
import { ListStudentsComponent } from './pages/list-students/list-students.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { NewStudentComponent } from './pages/new-student/new-student.component';

const routes: Routes = [
  { path: '', component: ListStudentsComponent },
  { path: 'view/:id', component: ViewStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent },
  { path: 'new', component: NewStudentComponent },
  { path: 'list', component: ListStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
