import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from '../shared/todo';
import { UserService } from '../shared/user.service';

@Pipe({
  name: 'todoFilterPipe'
})
export class TodoFilterPipePipe implements PipeTransform {
  constructor(public usrService: UserService){}

  transform(todos: Observable<Todo[]>, done: boolean | null): Observable<Todo[]> {
    return todos.pipe(map(t => {  return t.filter( t => { return ((done === true && t.doneDate) || (done === false && !t.doneDate)) && (this.usrService.memberGroupsArr.indexOf(t.group) != -1); });}))
  }
}
