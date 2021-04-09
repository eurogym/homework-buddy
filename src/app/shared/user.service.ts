import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth) { }

  public addUser(uid: (string | undefined), displayName: (string | null | undefined), email: (string | null | undefined)): void {
    this.firestore.collection('users').doc(uid).set
    ({ uid: uid, displayName: displayName, email: email });
  }
}
