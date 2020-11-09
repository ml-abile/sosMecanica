import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecupSenhaPage } from './recup-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RecupSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecupSenhaPageRoutingModule {}
