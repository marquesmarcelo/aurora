export abstract class GenericResourceModel<T> {
    public id?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
  
    constructor(model?: Partial<T>) {
      if (model) {
        Object.assign(this, model);
      }
      if (this.createdAt) {
        this.createdAt = new Date(this.createdAt);
      }
      if (this.updatedAt) {
        this.updatedAt = new Date(this.updatedAt);
      }
    }
  }