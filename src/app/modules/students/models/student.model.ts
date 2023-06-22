import { GenericResourceModel } from "src/app/shared/models/generic-resource-model";

export class Student extends GenericResourceModel<Student> {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
  
    constructor(model?: Partial<Student>) {
      super(model);
    }
  }