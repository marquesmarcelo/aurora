import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Student } from '../models/student.model';
import { HttpGenericResourceService } from "src/app/shared/services/http-generic-resource-service";

@Injectable({ providedIn: 'root' })
export class StudentsHttpService extends HttpGenericResourceService<Student> {
  constructor(private http: HttpClient) {
    super(http, Student, environment.apiUrl);
  }
}