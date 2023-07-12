import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsInMemoryService } from '../../services/students-in-memory.service';
import { StudentsFilterService } from '../../services/students-filter.service';
import { FilterConfig } from 'src/app/shared/models/filter-config.interface';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.css']
})
export class StudentsGridComponent implements OnInit {
  filter: FilterConfig = {}
  itens: Student[] =[];

  constructor(public _srv: StudentsInMemoryService, public _filterSrv: StudentsFilterService) { }

  ngOnInit() {

    this._filterSrv.isStudentsFilter$.subscribe(value => {this.filter = value})

    this._srv.getAll().then((data: Student[])=>{
      this.itens = data;
    })  
  }

  delete (id: string) {
    //this._srv.delete(id);
  }
}
