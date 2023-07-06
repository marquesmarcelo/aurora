import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent  implements OnInit {
  id:any;
  sub: any;

  constructor(
    private _activatedroute: ActivatedRoute,
    private _router: Router) {}

    ngOnInit() {
      this.sub = this._activatedroute.paramMap.subscribe((params) => {
        this.id = params.get('id');        
      });   
    }
   
    ngOnDestroy() {
      if (this.sub) this.sub.unsubscribe();
    }
    
    onBack(): void {
      this._router.navigate(['students']);
    }  
}
