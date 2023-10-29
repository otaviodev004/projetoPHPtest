import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermicaoPage } from './permicao.page';

const routes: Routes = [
  {
    path: '',
    component: PermicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermicaoPageRoutingModule {}
