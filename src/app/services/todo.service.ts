import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Object[] = [
  {id: 1, completed: false, title: 'Wash the dog', username: 'Mike'},
  {id: 2, completed: false, title: 'Wash the cat', username: 'Mike'},
  {id: 3, completed: true, title: 'Wash the elephant', username: 'John'},
  {id: 4, completed: false, title: 'Wash the horse', username: 'Mike'},
  {id: 5, completed: false, title: 'Wash the rhino', username: 'John'},
  ]
  private nextId: number = 6;
  constructor() { }


  // TODO: Get all Todos
  getAllTodos(){
      return this.todos
  }

  // TODO: Get todos by username
  getTodosByUsername(uname){
    return this.todos.filter(todo => todo['username'] === uname)
  }

  // TODO: Add todo
  addTodo(uname, todoTitle){
    let newTodo = {
      id: this.nextId,
      title: todoTitle,
      username: uname, 
      completed: false
    }
    this.nextId++;
    this.todos.push(newTodo);
  }

  // TODO: Delete Todo

  deleteTodo(id){
    let idx = this.todos.findIndex(todo => todo['id'] === id);
    //splice out element
    this.todos.splice(idx, 1);
  }

  markTodo(id){
    let idx = this.todos.findIndex(todo => todo['id'] === id);
    //splice out element
    this.todos[idx]['completed'] = !this.todos[idx]['completed']
  }


}
