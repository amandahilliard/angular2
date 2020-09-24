import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: string = ""
  username: string;
  todoList: Object[] = [];

  constructor(private todoService: TodoService, private actr: ActivatedRoute) {
      this.username = actr.snapshot.params.username;
      this.todoList = [...todoService.getTodosByUsername(this.username)];
   }

   markTodo(id){
    this.todoService.markTodo(id);
    this.todoList = [...this.todoService.getTodosByUsername(this.username)]
   }


   removeTodo(id){
    this.todoService.deleteTodo(id);
    this.todoList = [...this.todoService.getTodosByUsername(this.username)];
   }

   createTodo(){
    this.todoService.addTodo(this.username, this.title);
    this.todoList = [...this.todoService.getTodosByUsername(this.username)];
   }

  ngOnInit() {
  }

}