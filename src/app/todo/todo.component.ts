import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title: string = "";
  username: string = "";
  todos: Array<Todo> = []
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.allTodos();
  }

  addTodo(){
    if(this.username.length > 0 && this.title.length >0){
    this.todoService.addTodo(this.username, this.title)
    this.todos = this.todoService.allTodos();
    this.username = ""
    this.title = ""
    }
  }

  deleteTodo(id: number){
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.allTodos();
  }

  ngOnInit(): void {
  }

}
