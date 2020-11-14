import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendamentoAddEditPageRoutingModule } from './agendamento-add-edit-routing.module';

import { AgendamentoAddEditPage } from './agendamento-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    AgendamentoAddEditPageRoutingModule
  ],
  declarations: [AgendamentoAddEditPage]
})
export class AgendamentoAddEditPageModule {}
