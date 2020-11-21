import { ToastService } from './../../services/toast.service';
import { VeiculosService } from './../../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veiculo } from 'src/app/models/veiculo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-veiculos',
  templateUrl: './cadastrar-veiculos.page.html',
  styleUrls: ['./cadastrar-veiculos.page.scss'],
})
export class CadastrarVeiculosPage implements OnInit {

  public formVeiculos: FormGroup;
  public msg_validacao = {
    marca: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }],
    modelo: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }],
    ano: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }],
    //km: [{ tipo: 'minlength', mensagem: 'Km deve conter no minimo 3 caracteres!' }, { tipo: 'maxlength', mensagem: 'KM deve conter no máximo 20 caracteres!' }],
    cor: [{ tipo: 'minlength', mensagem: 'Cor deve conter no minimo 3 caracteres!' }, { tipo: 'maxlength', mensagem: 'Cor deve conter no máximo 40 caracteres!' }],
    placa: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }, { tipo: 'minlength', mensagem: 'Placa deve conter no minimo 8 caracteres!' }, { tipo: 'maxlength', mensagem: 'Placa deve conter no máximo 11 caracteres!' }],
    combust: [{ tipo: 'minlength', mensagem: 'Combustível deve conter no minimo 3 caracteres!' }, { tipo: 'maxlength', mensagem: 'Combustível deve conter no máximo 15 caracteres!' }],
  }

  constructor(private formBuilder: FormBuilder,
    private veiculoService: VeiculosService,
    private toastService: ToastService,
    private router: Router) {
    this.formVeiculos = formBuilder.group({
      marca: ['', Validators.compose([Validators.required])],
      modelo: ['', Validators.compose([Validators.required])],
      ano: ['', Validators.compose([Validators.required])],
      //km: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20)])],
      cor: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(40)])],
      placa: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(11)])],
      combust: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(15)])]
    });
  }

  ngOnInit() {
  }

  public cadVeiculo() {
    if (this.formVeiculos.valid) {

      const veiculo = new Veiculo();
      veiculo.marca = this.formVeiculos.value.marca;
      veiculo.modelo = this.formVeiculos.value.modelo;
      veiculo.ano = this.formVeiculos.value.ano;
      veiculo.cor = this.formVeiculos.value.cor;
      veiculo.placa = this.formVeiculos.value.placa;
      veiculo.combust = this.formVeiculos.value.combust;

      this.veiculoService.create(veiculo).then(dados => {
        console.log(dados);
        this.toastService.presentToast('Veículo cadastrado!', 3000, 'middle', 'secondary');
        this.router.navigateByUrl('/consulta-veiculos');
      }).catch(erro => {
        console.error(erro);
      });
    }
  }

}
