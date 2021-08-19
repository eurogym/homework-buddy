import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { empty, Observable, pipe, Subscription } from 'rxjs';
import { Todo } from './todo';
import { GruppeFB } from './gruppe-fb';
import { GruppeComponent } from '../gruppe/gruppe.component';
import { filter, first, map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GruppeFBListService {
  public gruppen$: Observable<GruppeFB[]> = empty();

  private userId = '';

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth, public usrService: UserService) {
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        this.userId = state.uid;
        this.gruppen$ = firestore.collection<GruppeFB>('gruppen', ref => ref.orderBy('Gruppenname'))
          .valueChanges({idField: 'id'});

      } else {

        this.userId = '';
        this.gruppen$ = empty();
      }
    });
  }

  public getUsersGroups(): Observable<GruppeFB[]>{
    return this.firestore.collection<GruppeFB>('gruppen', ref => ref.orderBy('Gruppenname'))
      .valueChanges({idField: 'id'})
      .pipe(
        map(data => data.filter(grp => this.usrService.memberGroupsArr.indexOf(grp.id) !== -1))
      );
  }

  public getGroupbyId(grpId: string): Observable<GruppeFB[]>{
    // return this.firestore.doc<GruppeFB>('gruppen/' + grpId).valueChanges();
    return this.firestore.collection<GruppeFB>('gruppen', ref => ref.where('id', '==', grpId).orderBy('Gruppenname'))
      .valueChanges({IdField: 'id'});
  }
  public addGruppe(Gruppenname: string, Beschreibung: string): void {
    this.firestore.collection('gruppen').add
    ({ Gruppenname:Gruppenname, Beschreibung:Beschreibung, userUid: this.userId });
  }

  public deleteGruppeById(id: string): void {
    if (confirm('Wollen Sie wirklich Löschen?')){
      this.firestore.collection<Todo>('todos', ref => ref.where("group", "==", id)).valueChanges({idField: 'id'}).subscribe(tds => {
        tds.map((t: Todo) => {
          this.firestore.doc(`todos/${t.id}`).delete();
        })
      });
    	this.firestore.doc('gruppen/' + id).delete();
    }
    }

  public updateGruppeById(gruppen: GruppeFB): void {
      this.firestore.doc('gruppen/' + gruppen.id).update({ Gruppenname: gruppen.Gruppenname});
    }

}

