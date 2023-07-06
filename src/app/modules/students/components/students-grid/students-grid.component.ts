import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsInMemoryService } from '../../services/students-in-memory.service';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.css']
})
export class StudentsGridComponent implements OnInit {
  @Input() filter: string = '';
  itens: Student[] =[];

  constructor(public _srv: StudentsInMemoryService) { }

  ngOnInit() {
    this._srv.getAll().then((data: Student[])=>{
      this.itens = data;
    })  
  }

  delete (id: string) {
    //this._srv.delete(id);
  }
}
