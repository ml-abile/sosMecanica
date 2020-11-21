import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  constructor(private afs: AngularFirestore) { }

  public create(agendamento: Agendamento){
    return this.afs.collection('agendamentos').add({...agendamento});
  }

  public getAll(){
    return this.afs.collection('agendamentos').snapshotChanges();
  }

  public update(key: string, agendamento: Agendamento){
    return this.afs.doc(`agendamentos/${key}`).update(agendamento);
  }

  public delete(key: string){
    return this.afs.doc(`agendamentos/${key}`).delete();
  }
}
