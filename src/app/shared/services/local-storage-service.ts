
import { Injectable } from '@angular/core';

declare var db: any;

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public storageName = "aurora";

  constructor() {

  }

  async add(keyname: any, value: any) {
    if (db != undefined) {
      const request = db.transaction([this.storageName], "readwrite")
      .objectStore(this.storageName).put(value, keyname);
      request.onsuccess = (event: any) => {
        if (event.target.result) {
          console.log ("sucess");
        } else {
          console.log ("error");
        }
      };
    }
  }

  async get(keyname: any) {
    if (db != undefined) {
      const request = db.transaction([this.storageName], "readwrite")
      .objectStore(this.storageName).get(keyname);
      request.onsuccess = (event: any) => {
        if (event.target.result) {
          console.log ("sucess");
        } else {
          console.log ("error");
        }
      }
    };
  }

  async delete(keyname: any) {
    if (db != undefined) {
      const request = db.transaction([this.storageName], "readwrite")
      .objectStore(this.storageName).delete(keyname);
      request.onsucess = (event: any) => {
        if (event.target.result) {
          console.log ("sucess");
        } else {
          console.log ("error");
        }
      }
    }
  }
}
