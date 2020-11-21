import { Veiculo } from './../../../models/veiculo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentosService } from 'src/app/services/agendamentos.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

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

  constructor(private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private agendamentoService: AgendamentosService) {
    this.formAgend = formBuilder.group({
      diaAgend: ['', Validators.compose([Validators.required])],
      horaAgend: ['', Validators.compose([Validators.required])],
      veiculo: ['', Validators.compose([Validators.required])],
      opcaoLevaTras: ['', Validators.compose([Validators.required])],
      obs: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(255)])]
    })
   }

   public cadAgend() {
    if (this.formAgend.valid) {

      const agend = new Agendamento();
      agend.dia = this.formAgend.value.diaAgend;
      agend.horario = this.formAgend.value.horaAgend;
      agend.veiculo = this.formAgend.value.veiculo;
      agend.opcaoLevatras = this.formAgend.value.opcaoLevaTras;
      agend.obs = this.formAgend.value.obs;
 
      this.agendamentoService.create(agend).then(dados => {
        console.log(dados);
        this.toastService.presentToast('Agendamento registrado e em análise!', 5000, 'middle', 'secondary');
        this.router.navigateByUrl('/consulta-agendamentos');
      }).catch(erro => {
        console.error(erro);
      });
   }
  }
  ngOnInit() {
  }

}
