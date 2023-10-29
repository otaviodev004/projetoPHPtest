import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLocalPageRoutingModule } from './modal-local-routing.module';

import { ModalLocalPage } from './modal-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLocalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalLocalPage]
})
export class ModalLocalPageModule {}
