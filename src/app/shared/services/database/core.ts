import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Core {
    public storageName = "aurora";
    public dbName = "main";
    public status: "open"|"closed"|"error" = "error";
    private db: IDBDatabase | undefined;
    private objectStore: IDBObjectStore | undefined;

    constructor() {
      this.setupDB(this.dbName, 1);
    }

    private setupDB(name: string, version: number) {
      const request = indexedDB.open(name, version);
      request.onerror = (event) => {
        console.debug("Could not open DB");
        console.debug(event);
        this.status = "error";
      }
      request.onsuccess = (event: any) => {
        this.db = event?.target?.result;
        if (!this.db) return;
        this.status = "open";
        console.debug({ status: this.status, db: this.db })
      }
      request.onupgradeneeded = (event: any) => {
        const db = event?.target?.result;
        console.debug(event);
        if (!db) return;
        this.objectStore = db.createObjectStore(name);
        console.debug({ event, status: this.status, db: db, objectStore: this.objectStore})
      };
    }
    
    private dbOperation(op: "readwrite"|"readonly") : IDBObjectStore | null {
      console.debug({ op: op, db: this.db });
      if (this.db === undefined) {
        throw this.notReady;
        return null;
      }
      return this.db.transaction([this.storageName], op).objectStore(this.storageName);
    }

    private promissify(request: IDBRequest | undefined) {
      if (!request) return Promise.reject(this.notReady);

      return new Promise ((resolve, reject) => {
        request.onsuccess = resolve;
        request.onerror = reject
      });
    }

    private get transaction(): IDBObjectStore | null {
      return this.dbOperation("readwrite");
    }

    private get read(): IDBObjectStore | null {
      return this.dbOperation("readonly");
    }

    private get notReady() {
      return new Error(`Database is not ready. Current status is ${this.status}`);
    }

    put(keyname: string, value: string) {
      return this.promissify(this.transaction?.put(value, keyname));
    }

    get(keyname: any) {
      return this.promissify(this.read?.get(keyname));
    }

    delete(keyname: any) {
      return this.promissify(this.transaction?.delete(keyname));
    }
}
