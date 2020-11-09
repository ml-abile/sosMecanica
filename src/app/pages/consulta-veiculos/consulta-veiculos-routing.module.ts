import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaVeiculosPage } from './consulta-veiculos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaVeiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaVeiculosPageRoutingModule {}
