import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { empty, Observable, Subscription } from 'rxjs';
import { Todo } from './todo';
import { GruppeFB } from './gruppe-fb';
import { GruppeComponent } from '../gruppe/gruppe.component';

@Injectable({
  providedIn: 'root'
})
export class GruppeFBListService {
  public gruppen$: Observable<GruppeFB[]> = empty();

  private userUid = '';

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        this.userUid = state.uid;
        this.gruppen$ = firestore.collection<GruppeFB>('gruppen', ref => ref.orderBy('Gruppenname'))
          .valueChanges({IdField: 'id'});

      } else {

        this.userUid = '';
        this.gruppen$ = empty();
      }
    });
  }



  public getGroupbyId(grpId: string): Observable<GruppeFB | undefined>{
    return this.firestore.doc<GruppeFB>('gruppen/' + grpId).valueChanges();
  }
  public addGruppe(Gruppenname: string, Beschreibung: string): void {
    this.firestore.collection('gruppen').add
    ({ Gruppenname:Gruppenname, Beschreibung:Beschreibung, userUid: this.userUid });
  }
 
  public deleteGruppeById(id: string): void {
    this.firestore.doc('gruppen/' + id).delete();
    }
    
  public updateGruppeById(gruppen: GruppeFB): void {
      this.firestore.doc('gruppen/' + gruppen.id).update({ Gruppenname: gruppen.Gruppenname});
    }
  
}

