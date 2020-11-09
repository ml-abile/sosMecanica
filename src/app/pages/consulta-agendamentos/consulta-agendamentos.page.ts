import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-agendamentos',
  templateUrl: './consulta-agendamentos.page.html',
  styleUrls: ['./consulta-agendamentos.page.scss'],
})
export class ConsultaAgendamentosPage implements OnInit {

  public itens: any = [
    {
      Marca: "",
      Modelo: "06 de Julho 2020",
      Tipo: "16:00hs ",
      Cor: "Prata",
      Ano: "1998",
      Combustivel: "Gasolina",
      Placa: "CHU-1234",
      tamanhos: [

      ],
      
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
