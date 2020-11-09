import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarVeiculosPage } from './cadastrar-veiculos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarVeiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarVeiculosPageRoutingModule {}
