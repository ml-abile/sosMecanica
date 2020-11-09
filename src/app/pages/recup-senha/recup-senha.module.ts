import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecupSenhaPageRoutingModule } from './recup-senha-routing.module';

import { RecupSenhaPage } from './recup-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecupSenhaPageRoutingModule
  ],
  declarations: [RecupSenhaPage]
})
export class RecupSenhaPageModule {}
