import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaAgendamentosPage } from './consulta-agendamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaAgendamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaAgendamentosPageRoutingModule {}
