import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, 
  { path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) }, 
  { path: 'classes', loadChildren: () => import('./modules/classes/classes.module').then(m => m.ClassesModule) }, 
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
