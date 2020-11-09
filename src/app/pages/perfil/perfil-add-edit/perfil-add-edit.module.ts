import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAddEditPageRoutingModule } from './perfil-add-edit-routing.module';

import { PerfilAddEditPage } from './perfil-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAddEditPageRoutingModule
  ],
  declarations: [PerfilAddEditPage]
})
export class PerfilAddEditPageModule {}
