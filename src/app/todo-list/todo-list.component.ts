import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../shared/todo-list.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoDescription = '';
  public todoDueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  public showDone = false;
  public subject ='';
  public group ='';
  public category ='';
  public displayedColumns = ['subject','group', 'category', 'todoDescription','todoDueDate' ]


  constructor(public todoListService: TodoListService) {
  }

  ngOnInit(): void {
  }

  public addTodo(): void {
    if (this.todoDescription && this.todoDueDate && this.subject && this.group && this.category ) {
      this.todoListService.addTodo(this.subject, this.group, this.todoDescription, this.category, new Date(this.todoDueDate));
      this.subject = '';
      this.group = '';
      this.todoDescription = '';
      this.category = '';
      this.todoDueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    }
  }
}