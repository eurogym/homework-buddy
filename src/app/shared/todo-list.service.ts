import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, Subscription, empty, forkJoin, combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Todo } from './todo';
import { GruppeFB } from './gruppe-fb';
import { GruppeFBListService } from './gruppe-fb-list.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todos$: Observable<Todo[]> = empty();
  private userUid = '';

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth, private gruppenService: GruppeFBListService) {
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        this.userUid = state.uid;
        this.todos$ = firestore.collection<Todo>('todos', ref => ref.orderBy('dueDate'))
          .valueChanges({idField: 'id'})
          .pipe(
            switchMap((tds: Todo[]) => forkJoin(tds.map((td: Todo) => {
              return gruppenService.getGroupbyId('gruppen/' + td.id).pipe(
                map(grp => {
                  td.groupobj = grp;
                  return td;
                })
              )
            }

            )))
          );
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
