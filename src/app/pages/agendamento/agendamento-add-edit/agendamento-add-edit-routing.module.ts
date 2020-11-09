import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendamentoAddEditPage } from './agendamento-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AgendamentoAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamentoAddEditPageRoutingModule {}
