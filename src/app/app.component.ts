import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { UserService } from './shared/user.service';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, public router: Router, public userService: UserService) {
  }

  login(): void {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      var credential  = result.credential;
      // The signed-in user info.
      var user = result.user;
      this.userService.addUser(user?.uid, user?.displayName, user?.email)
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    // .then(() => {

    //   this.router.navigate(['dashboard']);
    // });
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
