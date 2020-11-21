import { Veiculo } from './../models/veiculo';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private afs: AngularFirestore) { }

  public create(veiculo: Veiculo){
    return this.afs.collection('veiculos').add({...veiculo});
  }

  public getAll(){
    return this.afs.collection('veiculos').snapshotChanges();
  }

  public update(key: string, veiculo:Veiculo){
    return this.afs.doc(`veiculos/${key}`).update(veiculo);
  }

  public delete(key: string){
    return this.afs.doc(`veiculos/${key}`).delete();
  }
}
