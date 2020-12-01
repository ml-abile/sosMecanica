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

  public getByIdold(key: string) {
    return this.afs.doc(`agendamentos/${key}`).get();
  }

  async getById(key: string):Promise<Agendamento>  { 
    try {
      const agendamento = await this.afs.collection('agendamentos').doc(key).ref.get();
      if (agendamento.exists) {
        const dadosAgendamento = agendamento.data();
        return dadosAgendamento as Agendamento;
      }
    } catch (e) { console.log(e) }
  }

  public update(key: string, agendamento: Agendamento){
    return this.afs.doc(`agendamentos/${key}`).update({...agendamento});
  }

  public delete(key: string){
    return this.afs.doc(`agendamentos/${key}`).delete();
  }
}
