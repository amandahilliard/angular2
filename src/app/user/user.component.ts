import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: string = "";
  username: string = "";
  todos: Array<Todo> = []
  constructor(private todoService: TodoService,
    private actr: ActivatedRoute) {
      this.username = this.actr.snapshot.params.username
      this.todos = this.todoService.byUsername(this.username);
  }

  addTodo(){
    if(this.username.length > 0 && this.title.length >0){
    this.todoService.addTodo(this.username, this.title)
    this.todos = this.todoService.byUsername(this.username);
    this.title = ""
    }
  }

  deleteTodo(id: number){
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.byUsername(this.username);
  }

  ngOnInit(): void {
  }
}
