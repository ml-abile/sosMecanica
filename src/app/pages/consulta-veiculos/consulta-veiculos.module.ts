import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaVeiculosPageRoutingModule } from './consulta-veiculos-routing.module';

import { ConsultaVeiculosPage } from './consulta-veiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaVeiculosPageRoutingModule
  ],
  declarations: [ConsultaVeiculosPage]
})
export class ConsultaVeiculosPageModule {}
