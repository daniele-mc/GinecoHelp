import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Facebook } from '@ionic-native/facebook';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
    ) { }

  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }  

  AuthLogin(provider) {
    return this.afa.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afa.auth.signOut();
  }

  getAuth() {
    return this.afa.auth;
  }

  resetPassword(email: string) {
    return this.afa.auth.sendPasswordResetEmail(email).then(() => console.log("Email enviado"))
    .catch((error) => console.log(error));
  }
}
