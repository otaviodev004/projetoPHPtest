import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoguinPageRoutingModule } from './loguin-routing.module';

import { LoguinPage } from './loguin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoguinPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoguinPage]
})
export class LoguinPageModule {}
