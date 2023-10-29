import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermicaoPageRoutingModule } from './permicao-routing.module';

import { PermicaoPage } from './permicao.page';
import { ModalPermissaoPage } from '../modal-permissao/modal-permissao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermicaoPageRoutingModule
  ],
  declarations: [PermicaoPage]
})
export class PermicaoPageModule {}
