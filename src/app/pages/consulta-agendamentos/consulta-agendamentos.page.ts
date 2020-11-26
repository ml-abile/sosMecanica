import { AgendamentosService } from './../../services/agendamentos.service';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento';
import { ToastService } from 'src/app/services/toast.service';
import { Veiculo } from 'src/app/models/veiculo';


@Component({
  selector: 'app-consulta-agendamentos',
  templateUrl: './consulta-agendamentos.page.html',
  styleUrls: ['./consulta-agendamentos.page.scss'],
})
export class ConsultaAgendamentosPage implements OnInit {

  // public itens: any = [
  //   {
  //     Marca: "",
  //     Modelo: "06 de Julho 2020",
  //     Tipo: "16:00hs ",
  //     Cor: "Prata",
  //     Ano: "1998",
  //     Combustivel: "Gasolina",
  //     Placa: "CHU-1234"
  //   },
  // ]

  public listaAgendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentosService, private toastService: ToastService) { }

  public buscarAgendamentos() {
    this.listaAgendamentos = [];

    this.agendamentoService.getAll().subscribe(dados => {
      this.listaAgendamentos = dados.map(registro => {
        return {
          $key: registro.payload.doc.id,
          dia: registro.payload.doc.data()['dia'],
          horario: registro.payload.doc.data()['horario'],
          veiculo: registro.payload.doc.data()['veiculo'],
          obs: registro.payload.doc.data()['obs'],
          status: registro.payload.doc.data()['status'],
        } as Agendamento;
        
      });
    });
  }

  async ionViewWillEnter() {
    await this.buscarAgendamentos();
  }

  public deletar(key: string) {
      this.agendamentoService.delete(key)
      .then(() => {
        this.toastService.presentToast("Veículo removido com sucesso!", 3000, 'middle', 'secondary');
      })
      .catch((e) => {
        this.toastService.presentToast("Erro ao remover o veículo!", 3000, 'middle', 'secondary');
      })
      this.buscarAgendamentos();
  }

  public edtAgend() {

  }

  ngOnInit() {
    
   }

}
