import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './todo';
import { GruppeFB } from './gruppe-fb';
import { GruppeComponent } from '../gruppe/gruppe.component';

@Injectable({
  providedIn: 'root'
})
export class GruppeFBListService {
  public gruppen: GruppeFB[] = [];

  private userUid = '';
  private GruppenSubscription: Subscription = Subscription.EMPTY;

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        this.userUid = state.uid;

        this.GruppenSubscription = this.firestore.collection<any>(
          'gruppen').snapshotChanges().subscribe(data => {
            this.gruppen = data
              .map(e => {
                return {
                  id: e.payload.doc.id,
                  ...e.payload.doc.data()
                } as GruppeFB;
              })
          });
      } else {
        if (this.GruppenSubscription) {
          this.GruppenSubscription.unsubscribe();
        }

        this.userUid = '';
        this.gruppen = [];
      }
    });
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
  
    /**
  public toggleDoneStateById(Gruppen: gruppe): void {
      this.firestore.doc('gruppe/' + todo.id).update({ doneDate: todo.doneDate ? null : new Date() });
    }
    */
}

