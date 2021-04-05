import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from '../shared/todo';

@Pipe({
  name: 'todoFilterPipe'
})
export class TodoFilterPipePipe implements PipeTransform {

  transform(todos: Observable<Todo[]>, done: boolean | null): Observable<Todo[]> {
    return todos.pipe(map(t => {  return t.filter( t => { return (done === true && t.doneDate) || (done === false && !t.doneDate); });}))
  }
}
