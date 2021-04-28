import { Component, OnInit } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoListService } from '../shared/todo-list.service';
import { formatDate } from '@angular/common';
import { GruppeFBListService } from '../shared/gruppe-fb-list.service';
import { UserService } from '../shared/user.service';

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
  public displayedColumns = ['actions','todoDueDate','subject','group', 'category', 'todoDescription'] //,'deleteTodoById' ]

  constructor(public todoListService: TodoListService, public grpService: GruppeFBListService, public usrService: UserService) {
  }

  ngOnInit(): void {
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
