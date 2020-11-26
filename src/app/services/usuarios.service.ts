import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public afs: AngularFirestore,) { }

  public create(id: string, usuario: Usuario) {
    return this.afs.collection('Usuarios').doc(id).set(usuario)
  }

  public getAll() {
    return this.afs.collection('Usuarios').snapshotChanges();
  }

  public getByIdold(key: string) {
    return this.afs.doc(`Usuarios/${key}`).get();
  }

  async getById(key: string): Promise<Usuario> {
    try {
      const usuario = await this.afs.collection('Usuarios').doc(key).ref.get();
      if (usuario.exists) {
        const dadosUsuario = usuario.data();
        return dadosUsuario as Usuario;
      }
    } catch (e) { console.log(e) }
  }

  public update(key: string, usuario: Usuario) {
    return this.afs.doc(`Usuarios/${key}`).update({ ...usuario });
  }

  public delete(key: string) {
    return this.afs.doc(`Usuarios/${key}`).delete();
  }

}
