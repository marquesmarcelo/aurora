import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent   implements OnInit {
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
