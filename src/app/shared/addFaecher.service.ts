import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { empty, Observable, Subscription } from 'rxjs';
//import { Todo } from '../todo';
import { filter, first } from 'rxjs/operators';
import { Faecher } from './addFaecher';

@Injectable({
  providedIn: 'root'
})
export class addFaecherListService {
  public fach$: Observable<Faecher[]> = empty();

  private userId = '';

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        this.userId = state.uid;
        this.fach$ = firestore.collection<Faecher>('fach', ref => ref.orderBy('Fachname'))
          .valueChanges({idField: 'id'});

      } else {

        this.userId = '';
        this.fach$ = empty();
      }
    });
  }



  public getFachbyId(FachId: string): Observable<Faecher[]>{
    // return this.firestore.doc<Fächer>('fach/' + grpId).valueChanges();
    return this.firestore.collection<Faecher>('fach', ref => ref.where('id', '==', FachId).orderBy('Fachname'))
      .valueChanges({IdField: 'id'});
  }
  public addFach(Fachname: string, Fachbeschreibung: string): void {
    this.firestore.collection('fach').add
    ({ Fachname:Fachname, Fachbeschreibung:Fachbeschreibung, userUid: this.userId });
  }

  public deleteFachById(id: string): void {
    this.firestore.doc('fach/' + id).delete();
    }

  public updateFachById(fach: Faecher): void {
      this.firestore.doc('fach/' + fach.id).update({ Fachname: fach.Fachname});
    }

}

