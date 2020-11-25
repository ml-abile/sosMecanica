import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentosService } from 'src/app/services/agendamentos.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-agendamento-add-edit',
  templateUrl: './agendamento-add-edit.page.html',
  styleUrls: ['./agendamento-add-edit.page.scss'],
})
export class AgendamentoAddEditPage implements OnInit {
  public listaVeiculos: Veiculo[] = [];

  public formAgend: FormGroup;
  public msg_validacao = {
    dia: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }],
    horario: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }],
    veiculo: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }],
    //opcaoLevatras: [{tipo: 'required', mensagem: 'Campo obrigatório!'}],
    obs: [{ tipo: 'required', mensagem: 'Campo obrigatório!' }, { tipo: 'minlength', mensagem: 'Observação deve conter no minimo 10 caracteres!' }, { tipo: 'maxlength', mensagem: 'Oberservação deve conter no máximo 255 caracteres!' }],
  }

  constructor(private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private agendamentoService: AgendamentosService,
    private veiculoService: VeiculosService) {
    this.buscarVeiculos();

    this.formAgend = formBuilder.group({
      dia: ['', Validators.compose([Validators.required])],
      horario: ['', Validators.compose([Validators.required])],
      veiculo: ['', Validators.compose([Validators.required])],
      //opcaoLevatras: ['', Validators.compose([Validators.required])],
      obs: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(255)])]
    })
  }

  public cadAgend() {
    if (this.formAgend.valid) {

      const agend = new Agendamento();
      agend.dia = this.formAgend.value.dia;
      agend.horario = this.formAgend.value.horario;
      agend.veiculo = this.formAgend.value.veiculo;
      //agend.opcaoLevatras = this.formAgend.value.opcaoLevatras;
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



  ngOnInit() {
  }

}
