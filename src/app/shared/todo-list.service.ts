import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, Subscription, empty } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Todo } from './todo';
import { GruppeFB } from './gruppe-fb';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todos$: Observable<Todo[]>;
  private userUid = '';

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth) {
    this.todos$ = empty();
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        this.userUid = state.uid;
        this.todos$ = firestore.collection<Todo>('todos', ref => ref.orderBy('dueDate')).valueChanges({idField: 'id'});
      } else {
        this.userUid = '';
        this.todos$ = empty();
      }
    });
  }

  public getTodosFilterd(done: boolean): Observable<Todo[]>{
    if (this.userUid != '') {
      return this.firestore.collection<Todo>('todos').valueChanges({idField: 'id'}).pipe(map(t => {
        return t.filter( t => { return (done === true && t.doneDate) || (done === false && !t.doneDate); });
      }));
    }
    else
    {
      return empty();
    }
  }

  public addTodo(subject: string, group: string, description: string, category: string, dueDate: Date): void {
    this.firestore.collection('todos').add
    ({ dueDate: dueDate, subject: subject, group: group, description: description, category: category, userUid: this.userUid });
  }

  public deleteTodoById(id: string): void {
    this.firestore.doc('todos/' + id).delete();
  }

  public updateTodoById(todo: Todo): void {
    this.firestore.doc('todos/' + todo.id).update({ description: todo.description, dueDate: todo.dueDate });
  }

  public toggleDoneStateById(todo: Todo): void {
    if (todo.id)
      this.firestore.doc('todos/' + todo.id).update({ doneDate: todo.doneDate ? null : new Date() });
  }
}
