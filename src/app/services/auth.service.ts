import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Users } from './../interfaces/users';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afa: AngularFireAuth, private afs: AngularFirestoreModule) { }

  login(user : Users){
    return this.afa.signInWithEmailAndPassword(user.email, user.senha);
  }

  register(user: Users){
    return this.afa.createUserWithEmailAndPassword(user.email, user.senha);
  }

  logout(){
    return this.afa.signOut();
  }

  getAuth(){
    return this.afa;
  }

  resetSenha(user: Users){
    return this.afa.sendPasswordResetEmail(user.email);
  }
}
