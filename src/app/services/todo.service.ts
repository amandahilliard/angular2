import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Array<Todo> = [
    {id: 1, title: 'Wash the dog', user: 'Mike'},
    {id: 2, title: 'Wash the cat', user: 'Mike'},
    {id: 3, title: 'Wash the elephant', user: 'John'},
    {id: 4, title: 'Wash the horse', user: 'Mike'},
    {id: 5, title: 'Wash the rhino', user: 'John'},
  ]
  nextId: number = 6;

  constructor() { }

  // Add Todo
  addTodo(username: string, title: string){
    let newTodo: Todo = {
      id: this.nextId,
      title: title, 
      user: username,
    }
    this.nextId++;
    this.todos = [...this.todos, newTodo];
  }

  // Delete Todo
  deleteTodo(id: number): void{
    let removeIdx = this.todos.map(todo => todo.id).indexOf(id);
    this.todos.splice(removeIdx, 1);
  }

  // All Todo
  allTodos(){
    return [...this.todos];
  }

  // todos by Username
  byUsername(username: string){
    return this.todos.filter(todo => username.toLowerCase() === todo.user.toLowerCase())
  }
}
