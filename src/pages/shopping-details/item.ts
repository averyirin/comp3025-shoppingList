export class item{
  id:string
  name:string;
  quantity:number;

  //gathers todolist from the database, and the passed values of task information for editing
  constructor(name:string, quantity:number) {
    this.name = name;
    this.quantity = quantity;
  }
}