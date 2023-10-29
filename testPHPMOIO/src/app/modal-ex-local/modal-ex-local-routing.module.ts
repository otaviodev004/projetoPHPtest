import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalExLocalPage } from './modal-ex-local.page';

const routes: Routes = [
  {
    path: '',
    component: ModalExLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalExLocalPageRoutingModule {}
