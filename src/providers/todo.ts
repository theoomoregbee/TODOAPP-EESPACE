import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/map';
import { ITodo } from '../interfaces/itodo';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private _dataSource: Array<ITodo> = [];

  constructor() {
    console.log('Hello TodoProvider Provider');
  }

  add(todo: ITodo) {
    this._dataSource.push(todo);
    console.log("Our List", this._dataSource);
  }

  delete(todo: ITodo) {
    this._dataSource.splice(this._dataSource.findIndex(searchedTodo => searchedTodo === todo), 1);
  }

  list(completed: boolean = false): Array<ITodo> {
    return this._dataSource.filter((todo: ITodo) => todo.completed === completed);
  }

}
