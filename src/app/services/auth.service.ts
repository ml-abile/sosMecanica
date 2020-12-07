import { Usuario } from './../models/usuario';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afa: AngularFireAuth, private afs: AngularFirestoreModule) { }

  login(user : Usuario){
    return this.afa.signInWithEmailAndPassword(user.email, user.senha);
  }

  register(user: Usuario){
    return this.afa.createUserWithEmailAndPassword(user.email, user.senha);
  }

  logout(){
    return this.afa.signOut();
  }

  getAuth(){
    return this.afa;
  }

  resetSenha(user: Usuario){
    return this.afa.sendPasswordResetEmail(user.email);
  }
}
