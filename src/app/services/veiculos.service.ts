import { AuthService } from './auth.service';
import { Veiculo } from './../models/veiculo';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private afs: AngularFirestore,
    private authService: AuthService) { }

  public create(veiculo: Veiculo) {
    return this.afs.collection('veiculos').add({ ...veiculo });
  }

  public getAll() {
    return this.afs.collection('veiculos').snapshotChanges();
  }

  public getByIdold(key: string) {
    return this.afs.doc(`veiculos/${key}`).get();
  }

  async getById(key: string):Promise<Veiculo>  { 
    try {
      const veiculo = await this.afs.collection('veiculos').doc(key).ref.get();
      if (veiculo.exists) {
        const dadosVeiculo = veiculo.data();
        return dadosVeiculo as Veiculo;
      }
    } catch (e) { console.log(e) }
  }

  public update(key: string, veiculo: Veiculo) {
    return this.afs.doc(`veiculos/${key}`).update(veiculo);
  }

  public delete(key: string) {
    return this.afs.doc(`veiculos/${key}`).delete();
  }
}
