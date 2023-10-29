import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPermissaoPageRoutingModule } from './modal-permissao-routing.module';

import { ModalPermissaoPage } from './modal-permissao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPermissaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalPermissaoPage],
  exports: [ModalPermissaoPage]
})
export class ModalPermissaoPageModule {}
