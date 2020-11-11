import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-veiculos',
  templateUrl: './cadastrar-veiculos.page.html',
  styleUrls: ['./cadastrar-veiculos.page.scss'],
})
export class CadastrarVeiculosPage implements OnInit {

  public formVeiculos: FormGroup;
  public msg_validacao = {
    marca: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    modelo: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    ano: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    placa: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
  }

  constructor(private formBuilder: FormBuilder) {
    this.formVeiculos = formBuilder.group({
      marca: ['', Validators.compose([Validators.required])],
      modelo: ['', Validators.compose([Validators.required])],
      ano: ['', Validators.compose([Validators.required])],
      km: [''],
      cor: [''],
      placa: ['', Validators.compose([Validators.required])], 
      combust: ['']
    });
   }

  ngOnInit() {
  }

  public cadVeiculo(){
    if(this.formVeiculos.valid){
      console.log('valido');
    } else {
      console.log('invalido');
    }
  }

}
