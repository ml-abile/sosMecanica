import { ToastService } from './../../../services/toast.service';
import { Usuario } from './../../../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DadosService } from 'src/app/services/dados.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-perfil-add-edit',
  templateUrl: './perfil-add-edit.page.html',
  styleUrls: ['./perfil-add-edit.page.scss'],
})
export class PerfilAddEditPage implements OnInit {
  public userLogado: Usuario;
  public formPerfil: FormGroup;
  public msg_validacao = {
    nome: [{tipo: 'required', mensagem: 'Campo obrigatório!'},{tipo: 'minlength', mensagem: 'Nome deve conter no minimo 3 caracteres!'}],
    dataNasc: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    endereco: [{tipo: 'required', mensagem: 'Campo obrigatório!'}, {tipo: 'minlength', mensagem: 'Endereço deve conter no minimo 3 caracteres!'}, {tipo: 'maxlength', mensagem: 'Endereço deve conter no máximo 100 caracteres!'}],
    numero: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    bairro: [{tipo: 'required', mensagem: 'Campo obrigatório!'}, {tipo: 'minlength', mensagem: 'Bairro deve conter no minimo 3 caracteres!'}, {tipo: 'maxlength', mensagem: 'Bairro deve conter no máximo 100 caracteres!'}],
    cidade: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    cep: [{tipo: 'required', mensagem: 'Campo obrigatório!'}, {tipo: 'minlength', mensagem: 'CEP deve conter no minimo 8 caracteres!'}, {tipo: 'maxlength', mensagem: 'CEP deve conter no máximo 10 caracteres!'}],
    celular: [{tipo: 'minlength', mensagem: 'Celular deve conter no minimo 10 caracteres!'}, {tipo: 'maxlength', mensagem: 'Celular deve conter no máximo 16 caracteres!'}],
    telefone: [{tipo: 'minlength', mensagem: 'Celular deve conter no minimo 10 caracteres!'}, {tipo: 'maxlength', mensagem: 'Celular deve conter no máximo 16 caracteres!'}],
  }
 

  ionViewWillEnter() {
    this.buscarDadosUsuarios();
  }

  constructor(private formBuilder: FormBuilder, 
              private usuariosService: UsuariosService, 
              private dadosService: DadosService,
              private toastService: ToastService,
              private router: Router,
              private route: ActivatedRoute) {
    this.formPerfil = formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      dataNasc: ['', Validators.compose([Validators.required])],
      endereco: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      numero: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      cidade: ['', Validators.compose([Validators.required])],
      cep: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
      celular: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(16)])],
      telefone: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(16)])],
    })
   }

  ngOnInit() {
  }

  public async buscarDadosUsuarios() {
    const user = await this.dadosService.getDados('user');
    if (user) {
      this.usuariosService.getById(user.uid).then(dadosUser => {
        this.userLogado = dadosUser;
        this.preencheFormulario(); 
      });
      console.log(this.userLogado);
    }
  }

  preencheFormulario() {
    this.formPerfil.controls.nome.setValue(this.userLogado.nome);
    this.formPerfil.controls.dataNasc.setValue(this.userLogado.dataNasc);
    this.formPerfil.controls.endereco.setValue(this.userLogado.endereco);
    this.formPerfil.controls.numero.setValue(this.userLogado.numero);
    this.formPerfil.controls.bairro.setValue(this.userLogado.bairro);
    this.formPerfil.controls.cidade.setValue(this.userLogado.cidade);
    this.formPerfil.controls.cep.setValue(this.userLogado.cep);
    this.formPerfil.controls.celular.setValue(this.userLogado.celular);
    this.formPerfil.controls.telefone.setValue(this.userLogado.telefone);
  }

  public perfil() {
    if (this.formPerfil.valid) {

      
      this.userLogado.dataNasc = this.formPerfil.value.dataNasc;
      this.userLogado.endereco = this.formPerfil.value.endereco;
      this.userLogado.numero = this.formPerfil.value.numero;
      this.userLogado.bairro = this.formPerfil.value.bairro;
      this.userLogado.cidade = this.formPerfil.value.cidade;
      this.userLogado.cep = this.formPerfil.value.cep;
      this.userLogado.celular = this.formPerfil.value.celular;
      this.userLogado.telefone = this.formPerfil.value.telefone;    

      // if (this.formPerfil.value.nome == undefined) {

      //   this.usuariosService.create(perfil.uid, perfil).then(dados => {
      //     console.log(dados);
      //     this.toastService.presentToast('Perfil atualizado!', 3000, 'middle', 'secondary');
      //     this.router.navigateByUrl('/home');
      //   }).catch(erro => {
      //     console.error(erro);
      //   });
      // } else {
        this.usuariosService.update(this.userLogado.uid, this.userLogado).then(dados => {
          console.log(dados);
          this.toastService.presentToast('Perfil atualizado!', 3000, 'middle', 'secondary');
          this.router.navigateByUrl('/home');
        }).catch(erro => {
          console.error(erro);
        });
      // }
    }
  }
}
