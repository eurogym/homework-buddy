import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, combineChange } from '@angular/fire/firestore';

import { Component, OnInit, ViewChild } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoListService } from '../shared/todo-list.service';
import { formatDate } from '@angular/common';
import { GruppeFBListService } from '../shared/gruppe-fb-list.service';


import { TodoListComponent } from '../todo-list/todo-list.component';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"







@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public todoDescription = '';
  public todoDueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  public showDone = false;
  public subject ='';
  public group ='';
  public category ='';
  public displayedColumns = ['actions','todoDueDate','subject','group', 'category', 'todoDescription',] //,'deleteTodoById' ]
  public bShowDoneRecords = false;



  constructor( public todoListService: TodoListService, public grpService: GruppeFBListService,
    private dialog: MatDialog ) {

  }

  ngOnInit(): void {
  }
//
 onCreate(): void {
  const dialogConfig = new MatDialogConfig();
  let todoDialog =  this.dialog.open(TodoListComponent, dialogConfig);
 }

 editTodo(elem: Todo): void {
  const dialogConfig = new MatDialogConfig();
  let todoDialog =  this.dialog.open(TodoListComponent, dialogConfig);
  todoDialog.componentInstance.todoItem = <Todo>elem;
  todoDialog.componentInstance.dueDate = new Date(elem.dueDate.seconds * 1000);
 }

  // getTodoPercentage(): number {
  //   if (this.todoListService.todos.length) {
  //     return this.todoListService.todos.filter(t => !t.doneDate).length / this.todoListService.todos.length * 100;
  //   } else {
  //     return 0;
  //   }
  // }

  // getDonePercentage(): number {
  //   if (this.todoListService.todos.length) {
  //     return this.todoListService.todos.filter(t => t.doneDate).length / this.todoListService.todos.length * 100;
  //   } else {
  //     return 0;
  //   }
  // }

  }
