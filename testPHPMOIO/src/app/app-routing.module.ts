import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loguin',
    pathMatch: 'full'
  },
  {
    path: 'loguin',
    loadChildren: () => import('./pages/loguin/loguin.module').then( m => m.LoguinPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'permicao',
    loadChildren: () => import('./permicao/permicao.module').then( m => m.PermicaoPageModule)
  },
  {
    path: 'modal-permissao',
    loadChildren: () => import('./modal-permissao/modal-permissao.module').then( m => m.ModalPermissaoPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'modal-local',
    loadChildren: () => import('./modal-local/modal-local.module').then( m => m.ModalLocalPageModule)
  },
  {
    path: 'modal-ex-local',
    loadChildren: () => import('./modal-ex-local/modal-ex-local.module').then( m => m.ModalExLocalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
