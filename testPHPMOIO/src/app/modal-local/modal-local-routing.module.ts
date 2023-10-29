import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLocalPage } from './modal-local.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLocalPageRoutingModule {}
