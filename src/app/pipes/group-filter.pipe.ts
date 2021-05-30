import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GruppeFB } from '../shared/gruppe-fb';
import { UserService } from '../shared/user.service';

@Pipe({
  name: 'groupFilter'
})
export class GroupFilterPipe implements PipeTransform {
  constructor(public usrService: UserService){}

  transform(groups: Observable<GruppeFB[]>): Observable<GruppeFB[]> {
    return groups.pipe(map(g => {
      return g.filter( g => {
        return (this.usrService.memberGroupsArr.indexOf(g.id) !== -1)
      });
    }))

  }

}
