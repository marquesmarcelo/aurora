import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Core as DB } from './shared/services/database/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public database: DB) {
    console.log('production:'+ environment.production); // Logs false for development environment
  }
  title = 'aurora-app';

  add() {
    this.database.put("chave","valor").then((res: unknown) => {
       console.debug("inserted successfully");      
       console.debug(res);      
    })
    .catch((error: Error) => console.log ("error:" + error));
  }

  get() {
    this.database.get("chave").then((res) => {
       console.log ("get value:" + res);      
    })
    .catch((error: Error) => console.log ("error:" + error));
  }

  del() {
    this.database.delete("chave").then((res) => {
       console.log ("deleted successfully");      
    })
    .catch((error: Error) => console.log ("error:" + error));
  }
}

