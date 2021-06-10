import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from '../shared/todo';
import { UserService } from '../shared/user.service';
import firestore from 'firebase/app';


@Pipe({
  name: 'todoFilterPipe'
})


export class TodoFilterPipePipe implements PipeTransform {
  constructor(public usrService: UserService){}



  transform(todos: Observable<Todo[]>, done: boolean | null): Observable<Todo[]> {

    return todos.pipe(map(t => {  
      return t.filter( t => { 
        return ((done === true && t.doneByUser && (t.doneByUser?.indexOf(this.usrService.UserId) !== -1)) || 
          (done === false &&  ((!t.doneByUser) || t.doneByUser?.indexOf(this.usrService.UserId) === -1))) 
          && (this.usrService.memberGroupsArr.indexOf(t.group) !== -1)
      });
    }))
  }
}
