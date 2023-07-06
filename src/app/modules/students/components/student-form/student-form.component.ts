import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsInMemoryService } from '../../services/students-in-memory.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  @Input() id: string = '';
  @Input() mode: string = 'new'; //new / view / edit

  item: Student = new Student();

  constructor(public _srv: StudentsInMemoryService) { }

  ngOnInit() {
    if (this.mode != 'new') {
      this._srv.get(this.id).then((data)=>{
        this.item = data as Student;
      })
    }
  }
}
