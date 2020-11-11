import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarVeiculosPageRoutingModule } from './cadastrar-veiculos-routing.module';

import { CadastrarVeiculosPage } from './cadastrar-veiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    CadastrarVeiculosPageRoutingModule
  ],
  declarations: [CadastrarVeiculosPage]
})
export class CadastrarVeiculosPageModule {}
