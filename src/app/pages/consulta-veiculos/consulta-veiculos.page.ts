import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-veiculos',
  templateUrl: './consulta-veiculos.page.html',
  styleUrls: ['./consulta-veiculos.page.scss'],
})
export class ConsultaVeiculosPage implements OnInit {

  public itens: any = [
    {
      Marca: "Chevrolet",
      Modelo: "Corsa",
      Tipo: "Picape ",
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
