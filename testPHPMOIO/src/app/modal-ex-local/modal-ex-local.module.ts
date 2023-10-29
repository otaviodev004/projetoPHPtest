import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalExLocalPageRoutingModule } from './modal-ex-local-routing.module';

import { ModalExLocalPage } from './modal-ex-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalExLocalPageRoutingModule
  ],
  declarations: [ModalExLocalPage]
})
export class ModalExLocalPageModule {}
