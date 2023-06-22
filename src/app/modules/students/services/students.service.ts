import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from '../models/student.model';
import { HttpGenericResourceService } from "src/app/shared/services/http-generic-resource-service";

@Injectable({ providedIn: 'root' })
export class StudentsService extends HttpGenericResourceService<Student> {
  constructor(private http: HttpClient) {
    super(http, Student, `http:\\localhost\api`);
  }
}