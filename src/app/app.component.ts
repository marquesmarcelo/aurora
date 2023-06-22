import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { LocalStorageService } from './shared/services/local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public localStorage: LocalStorageService) {
    console.log('production:'+ environment.production); // Logs false for development environment
  }
  title = 'aurora-app';

  add() {
    this.localStorage.add("chave","valor").then((res) => {
       console.log ("inserted successfully");      
    })
    .catch(error => console.log ("error:" + error));
  }

  get() {
    this.localStorage.get("chave").then((res) => {
       console.log ("get value:" + res);      
    })
    .catch(error => console.log ("error:" + error));
  }

  del() {
    this.localStorage.delete("chave").then((res) => {
       console.log ("deleted successfully");      
    })
    .catch(error => console.log ("error:" + error));
  }
}
