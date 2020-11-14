import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento-add-edit',
  templateUrl: './agendamento-add-edit.page.html',
  styleUrls: ['./agendamento-add-edit.page.scss'],
})
export class AgendamentoAddEditPage implements OnInit {
 
  public formAgend: FormGroup;
  public msg_validacao = {
    diaAgend: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    horaAgend: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    veiculo: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    opcaoLevatras: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    obs: [{tipo: 'required', mensagem: 'Campo obrigatório!'}, {tipo: 'minlength', mensagem: 'Observação deve conter no minimo 10 caracteres!'}, {tipo: 'maxlength', mensagem: 'Oberservação deve conter no máximo 255 caracteres!'}],
  }

  constructor(private formBuilder: FormBuilder) {
    this.formAgend = formBuilder.group({
      diaAgend: ['', Validators.compose([Validators.required])],
      horaAgend: ['', Validators.compose([Validators.required])],
      veiculo: ['', Validators.compose([Validators.required])],
      opcaoLevaTras: ['', Validators.compose([Validators.required])],
      obs: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(255)])]
    })
   }

  ngOnInit() {
  }

}
