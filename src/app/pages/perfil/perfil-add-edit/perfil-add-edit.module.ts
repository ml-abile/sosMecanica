import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
//import { AppMaskerModule } from 'brmasker';

import { IonicModule } from '@ionic/angular';

import { PerfilAddEditPageRoutingModule } from './perfil-add-edit-routing.module';

import { PerfilAddEditPage } from './perfil-add-edit.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    PerfilAddEditPageRoutingModule,
    BrMaskerModule//AppMaskerModule
  ],
  declarations: [PerfilAddEditPage]
})
export class PerfilAddEditPageModule {}
