import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaAgendamentosPageRoutingModule } from './consulta-agendamentos-routing.module';

import { ConsultaAgendamentosPage } from './consulta-agendamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaAgendamentosPageRoutingModule
  ],
  declarations: [ConsultaAgendamentosPage]
})
export class ConsultaAgendamentosPageModule {}
