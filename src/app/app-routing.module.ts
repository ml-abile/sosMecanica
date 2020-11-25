import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), canActivate: [LoginGuard]
  },
  {
    path: 'perfil-add-edit',
    loadChildren: () => import('./pages/perfil/perfil-add-edit/perfil-add-edit.module').then( m => m.PerfilAddEditPageModule)
  },
  {
    path: 'cadastrar-veiculos/:id',
    loadChildren: () => import('./pages/cadastrar-veiculos/cadastrar-veiculos.module').then( m => m.CadastrarVeiculosPageModule)
  },
  //{
  //  path: 'agendamento-add-edit',
  //  loadChildren: () => import('./agendamento/agendamento-add-edit/agendamento-add-edit.module').then( m => m.AgendamentoAddEditPageModule)
  //},
  {
    path: 'agendamento-add-edit',
    loadChildren: () => import('./pages/agendamento/agendamento-add-edit/agendamento-add-edit.module').then( m => m.AgendamentoAddEditPageModule)
  },
  {
    path: 'consulta-veiculos',
    loadChildren: () => import('./pages/consulta-veiculos/consulta-veiculos.module').then( m => m.ConsultaVeiculosPageModule)
  },
  {
    path: 'consulta-agendamentos',
    loadChildren: () => import('./pages/consulta-agendamentos/consulta-agendamentos.module').then( m => m.ConsultaAgendamentosPageModule)
  },
  {
    path: 'recup-senha',
    loadChildren: () => import('./pages/recup-senha/recup-senha.module').then( m => m.RecupSenhaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
