import { Component } from '@angular/core';
import { StudentsFilterService } from '../../services/students-filter.service';
import { FilterConfig } from 'src/app/shared/models/filter-config.interface';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent {
  
  constructor(private _filter: StudentsFilterService) {    
  }
  
  onChange(): void {
    const filter: FilterConfig = {
      pageNumber: Math.floor(Math.random() * 10),
      pageSize: Math.floor(Math.random() * 10),
    };
    
    this._filter.setStudentsFilterValue(filter);
  }
}
