import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../shared/todo-list.service';
import { formatDate } from '@angular/common';
import { GruppeFBListService } from '../shared/gruppe-fb-list.service';

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
  public displayedColumns = ['actions','todoDueDate','subject','group', 'category', 'todoDescription','deleteTodoById' ]


  constructor(public todoListService: TodoListService, public GruppenFBListservice: GruppeFBListService) {
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