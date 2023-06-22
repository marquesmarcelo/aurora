
import { Injectable } from '@angular/core';

declare var db: any;

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    public storageName = "aurora";

    constructor() {
        
    }
    add(keyname: any, value: any) {
        return new Promise(async(resolve, reject) => {
            if (db != undefined) {
                const request = db.transaction([this.storageName], "readwrite")
                    .objectStore(this.storageName).put(value, keyname);
                request.onsucess = await function (event: any) {
                    if (event.target.result) {
                        console.log ("sucess");
                        resolve("sucess");
                    }
                    else {
                        console.log ("error");
                        resolve(false);
                    }
                }

            }
        });
      
    }
    get(keyname: any) {
        return new Promise(async(resolve, reject) => {
            if (db != undefined) {
                const request = db.transaction([this.storageName], "readwrite")
                    .objectStore(this.storageName).get(keyname);
                request.onsucess = await function (event: any) {
                    if (event.target.result) {
                        console.log ("sucess");
                        resolve("sucess");
                    }
                    else {
                        console.log ("error");
                        resolve(false);
                    }
                }

            }
        });
    }
    delete(keyname: any) {
        return new Promise(async(resolve, reject) => {
            if (db != undefined) {
                const request = db.transaction([this.storageName], "readwrite")
                    .objectStore(this.storageName).delete(keyname);
                request.onsucess = await function (event: any) {
                    if (event.target.result) {
                        console.log ("sucess");
                        resolve("sucess");
                    }
                    else {
                        console.log ("error");
                        resolve(false);
                    }
                }

            }
        });
    }
}
