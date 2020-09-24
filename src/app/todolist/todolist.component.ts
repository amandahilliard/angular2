import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Input() todoList: Object[];
  @Output() markEvent = new EventEmitter<number>() 
  @Output() deleteEvent = new EventEmitter<number>()
  search: string = ""
  sort: string = "id"
  constructor() { }


  markTodo(id){
    this.markEvent.emit(id);
  }

  deleteTodo(id){
    this.deleteEvent.emit(id);
  }

  ngOnInit() {
  }

}
