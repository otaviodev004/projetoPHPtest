import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPermissaoPage } from './modal-permissao.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPermissaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPermissaoPageRoutingModule {}
