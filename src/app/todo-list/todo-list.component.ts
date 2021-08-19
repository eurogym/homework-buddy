import { Component, OnInit } from '@angular/core';
import firestore from 'firebase/app';

import { TodoListService } from '../shared/todo-list.service';
import { formatDate } from '@angular/common';
import { GruppeFBListService } from '../shared/gruppe-fb-list.service';
import {addFaecherListService } from '../shared/addFaecher.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../shared/todo';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoItem: Todo = {
    id: '',
    description: '',
    subject: '',
    group: '',
    category: '',
    groupobj: null,
    subjectobj: null,
    dueDate: firestore.firestore.Timestamp.now(),
    doneDate: firestore.firestore.Timestamp.now(),
    doneByUser: []};
  public displayedColumns = ['actions','todoDueDate','subject','group', 'category', 'todoDescription','deleteTodoById' ]
  dueDate: Date = new Date(this.todoItem.dueDate.seconds * 1000);

  constructor(public todoListService: TodoListService, public GruppenFBListservice: GruppeFBListService, public addFaecherListService: addFaecherListService, private dataAdapter: DateAdapter<any>) {
    this.dataAdapter.setLocale('de');
  }

  ngOnInit(): void {
  }
  public updateTodo(): void {
    if (this.todoItem.description != '' && this.dueDate && this.todoItem.subject && this.todoItem.group && this.todoItem.category ) {
      this.todoItem.dueDate = firestore.firestore.Timestamp.fromDate(this.dueDate);
      this.todoListService.updateTodoById(this.todoItem);
      this.todoItem = {
        id: '',
        description: '',
        subject: '',
        group: '',
        category: '',
        groupobj: null,
        subjectobj: null,
        dueDate: firestore.firestore.Timestamp.now(),
        doneDate: firestore.firestore.Timestamp.now(),
        doneByUser: []
      };
    }
  }

  public addTodo(): void {
    if (this.todoItem.description != '' && this.todoItem.dueDate && this.todoItem.subject && this.todoItem.group && this.todoItem.category ) {
      this.todoListService.addTodo(this.todoItem.subject, this.todoItem.group, this.todoItem.description, this.todoItem.category, this.todoItem.dueDate);
      this.todoItem = {
        id: '',
        description: '',
        subject: '',
        group: '',
        category: '',
        groupobj: null,
        subjectobj: null,
        dueDate: firestore.firestore.Timestamp.now(),
        doneDate: firestore.firestore.Timestamp.now(),
        doneByUser: []
      };
    }
  }
}
