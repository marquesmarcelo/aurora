import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterConfig } from 'src/app/shared/models/filter-config.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsFilterService {

  private isStudentsFilter = new BehaviorSubject<FilterConfig>({});
  public isStudentsFilter$ = this.isStudentsFilter.asObservable();

  constructor() { }

  public setStudentsFilterValue(value: FilterConfig) {
    this.isStudentsFilter.next(value);
  }
}
