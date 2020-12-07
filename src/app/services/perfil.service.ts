import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private afs: AngularFirestore,
    private authService: AuthService) { }

  public create(perfil: Usuario) {
    return this.afs.collection('Usuarios').add({ ... perfil });
  }

  public getAll() {
    return this.afs.collection('Usuarios').snapshotChanges();
  }

  public getByIdold(key: string) {
    return this.afs.doc(`Usuarios/${key}`).get();
  }

  async getById(key: string):Promise<Usuario>  { 
    try {
      const veiculo = await this.afs.collection('Usuarios').doc(key).ref.get();
      if (veiculo.exists) {
        const dadosUsuario = veiculo.data();
        return dadosUsuario as Usuario;
      }
    } catch (e) { console.log(e) }
  }

  public update(key: string, perfil: Usuario) {
    return this.afs.doc(`Usuarios/${key}`).update({ ... perfil });
  }

  public delete(key: string) {
    return this.afs.doc(`Usuarios/${key}`).delete();
  }
}
