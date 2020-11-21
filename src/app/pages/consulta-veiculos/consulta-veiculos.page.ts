import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo';
import { ToastService } from 'src/app/services/toast.service';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-consulta-veiculos',
  templateUrl: './consulta-veiculos.page.html',
  styleUrls: ['./consulta-veiculos.page.scss'],
})
export class ConsultaVeiculosPage implements OnInit {

  // public itens: any = [
  //   {
  //     Marca: "Chevrolet",
  //     Modelo: "Corsa",
  //     Tipo: "Picape ",
  //     Cor: "Prata",
  //     Ano: "1998",
  //     Combustivel: "Gasolina",
  //     Placa: "CHU-1234"
  //     ], 
  //   },
  // ]

  public listaVeiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculosService,  private toastService: ToastService) { }


  public buscarVeiculos() {
    this.listaVeiculos = [];

    this.veiculoService.getAll().subscribe(dados => {
      this.listaVeiculos = dados.map(registro => {
        return {
          $key: registro.payload.doc.id,
          marca: registro.payload.doc.data()['marca'],
          modelo: registro.payload.doc.data()['modelo'],
          ano: registro.payload.doc.data()['ano'],
          km: registro.payload.doc.data()['km'],
          cor: registro.payload.doc.data()['cor'],
          placa: registro.payload.doc.data()['placa'],
          combust: registro.payload.doc.data()['combust'],
        } as Veiculo;
      });
    });
  }

  async ionViewWillEnter() {
    await this.buscarVeiculos();
  }

  public deletar(key: string) {
    this.veiculoService.delete(key)
    .then(() => {
      this.toastService.presentToast("Veículo removido com sucesso!", 3000, 'middle', 'secondary');
    })
    .catch((e) => {
      this.toastService.presentToast("Erro ao remover o veículo!", 3000, 'middle', 'secondary');
    })
    this.buscarVeiculos();
  }

  public edtVeiculo(key: string, veiculo:Veiculo) {
    this.veiculoService.update(key, veiculo)
    .catch((e) => {
      this.toastService.presentToast("Erro ao editar o veículo!", 3000, 'middle', 'secondary');
    })
  }

  ngOnInit() {  }

}
