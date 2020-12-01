import { ToastService } from './../../services/toast.service';
import { VeiculosService } from './../../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veiculo } from 'src/app/models/veiculo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-veiculos',
  templateUrl: './cadastrar-veiculos.page.html',
  styleUrls: ['./cadastrar-veiculos.page.scss'],
})
export class CadastrarVeiculosPage implements OnInit {
  public veiculo: Veiculo;
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
    private router: Router,
    private route: ActivatedRoute) {  }

  async ionViewWillEnter() {
    const id: string = this.route.snapshot.paramMap.get('id');

    if (id !== '-1') {
      this.veiculo = await this.veiculoService.getById(id);
      console.log(this.veiculo);
      this.veiculo.$key = id;

      this.formVeiculos = this.formBuilder.group({
        $key: [this.veiculo.$key],
        marca: [this.veiculo.marca, Validators.compose([Validators.required])],
        modelo: [this.veiculo.modelo, Validators.compose([Validators.required])],
        ano: [this.veiculo.ano, Validators.compose([Validators.required])],
        //km: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20)])],
        cor: [this.veiculo.cor, Validators.compose([Validators.minLength(3), Validators.maxLength(40)])],
        placa: [this.veiculo.placa, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(11)])],
        combust: [this.veiculo.combust, Validators.compose([Validators.minLength(3), Validators.maxLength(15)])]
      });
    }
    else {
      this.formVeiculos = this.formBuilder.group({
        marca: ['', Validators.compose([Validators.required])],
        modelo: ['', Validators.compose([Validators.required])],
        ano: ['', Validators.compose([Validators.required])],
        //km: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20)])],
        cor: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(40)])],
        placa: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(11)])],
        combust: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(15)])]
      });
    }
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
      // console.log(this.formVeiculos.value.$key);

      if (this.formVeiculos.value.$key == undefined) {

        this.veiculoService.create(veiculo).then(dados => {
          console.log(dados);
          this.toastService.presentToast('Veículo cadastrado!', 3000, 'middle', 'secondary');
          this.router.navigateByUrl('/consulta-veiculos');
        }).catch(erro => {
          console.error(erro);
        });
      } else {
        this.veiculoService.update(this.veiculo.$key, veiculo).then(dados => {
          console.log(dados);
          this.toastService.presentToast('Veículo atualizado!', 3000, 'middle', 'secondary');
          this.router.navigateByUrl('/consulta-veiculos');
        }).catch(erro => {
          console.error(erro);
        });
      }
    }
  }
  ngOnInit() { }
}
