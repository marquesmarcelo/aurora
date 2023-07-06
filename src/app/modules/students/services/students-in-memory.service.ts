import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsInMemoryService {

  constructor() { }

  list: Student[] = [{
    id: '1',
    firstName: 'John',
    lastName: 'Scoot',
    email: 'john.scoot@test.com',
  }];
  
  async getAll(){
    return this.list;
  }

  async add(obj: Student){
    this.list.push(obj);
  }

  async delete(id: string) {
    this.list = this.list.filter(item => item.id !== id);    
  }

  async get(id: string) {
    return this.list.find(item => item.id === id);    
  }

  async update(obj: Student) {
    const newArr = this.list.map(item => {
      if (item.id === obj.id) {
        return {...obj};
      }
    
      return item;
    });
    this.list = newArr;  
  }
}
