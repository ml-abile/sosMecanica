import { Usuario } from './../../../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DadosService } from 'src/app/services/dados.service';


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


  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private dadosService: DadosService) {
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
      });
      console.log(this.userLogado);
    }
  }
}
