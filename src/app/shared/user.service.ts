import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription, empty, forkJoin, combineLatest, merge } from 'rxjs';
import { appuser } from './AppUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public memberGroupsArr: string[] = [];
  public UserId: string = "";
  public currentUser$:Observable<appuser | undefined> = empty();
  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.getUser();
  }
  private getUser(){
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        let userUid = state.uid;
        let userDoc = this.db.collection('users').doc<appuser>(userUid);
        this.currentUser$ = userDoc.valueChanges();
        this.currentUser$.subscribe(u => {
          if (u?.memberingroups)
            this.memberGroupsArr = u?.memberingroups;
            this.UserId = (u ? u.uid : "");
          return u;
        });
      } else {
        this.currentUser$ = empty();
      }
    });
  }

  public addUser(uid: (string | undefined), displayName: (string | null | undefined), email: (string | null | undefined)): void {
    let userDoc = this.db.collection('users').doc(uid);
    userDoc.get().subscribe(x => {
      if (!x.exists){
        this.db.collection('users').doc(uid).set({ uid: uid, displayName: displayName, email: email, memberingroups: []});
      }
    });
  }

  public addUser2Group(groupId: string): void{
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        if (this.memberGroupsArr.indexOf(groupId) === -1)
        {
          let usrobj = this.db.collection('users').doc(state.uid);
          this.memberGroupsArr.push(groupId);
          usrobj.update({memberingroups: this.memberGroupsArr});
        }
      }
    });
  }
  public remUserGroup(groupId: string): void{
    this.afAuth.authState.subscribe(state => {
      if (state?.uid) {
        let usrobj = this.db.collection('users').doc(state.uid);
        this.memberGroupsArr.splice(this.memberGroupsArr.indexOf(groupId), 1);
        usrobj.update({memberingroups: this.memberGroupsArr});
      }
    });
  }

}
