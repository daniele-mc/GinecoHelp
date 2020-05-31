import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'objetivos', loadChildren: () => import('./pages/objetivos/objetivos.module').then(m => m.ObjetivosPageModule), canActivate: [LoginGuard] },
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule), canActivate: [LoginGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), canActivate: [LoginGuard] },
  { path: 'opcoes', loadChildren: () => import('./pages/opcoes/opcoes.module').then(m => m.OpcoesPageModule), canActivate: [AuthGuard] },
  { path: 'saude-vaginal', loadChildren: () => import('./pages/saude-vaginal/saude-vaginal.module').then(m => m.SaudeVaginalPageModule), canActivate: [AuthGuard] },
  { path: 'saude-vaginal-dicas', loadChildren: () => import('./pages/saude-vaginal-dicas/saude-vaginal-dicas.module').then(m => m.SaudeVaginalDicasPageModule), canActivate: [AuthGuard] },
  { path: 'saude-vaginal-dois', loadChildren: () => import('./pages/saude-vaginal-dois/saude-vaginal-dois.module').then(m => m.SaudeVaginalDoisPageModule), canActivate: [AuthGuard] },
  { path: 'saude-vaginal-dois-dicas', loadChildren: () => import('./pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.module').then(m => m.SaudeVaginalDoisDicasPageModule), canActivate: [AuthGuard] },
  { path: 'saude-relacoes', loadChildren: () => import('./pages/saude-relacoes/saude-relacoes.module').then(m => m.SaudeRelacoesPageModule), canActivate: [AuthGuard] },
  { path: 'higiene', loadChildren: () => import('./pages/higiene/higiene.module').then(m => m.HigienePageModule), canActivate: [AuthGuard] },
  { path: 'higiene-dois', loadChildren: () => import('./pages/higiene-dois/higiene-dois.module').then(m => m.HigieneDoisPageModule), canActivate: [AuthGuard] },
  { path: 'higiene-tres', loadChildren: () => import('./pages/higiene-tres/higiene-tres.module').then(m => m.HigieneTresPageModule), canActivate: [AuthGuard] },
  { path: 'ciclo-menstrual', loadChildren: () => import('./pages/ciclo-menstrual/ciclo-menstrual.module').then(m => m.ClicoMenstrualPageModule), canActivate: [AuthGuard] },
  { path: 'ciclo-menstrual-dois', loadChildren: () => import('./pages/ciclo-menstrual-dois/ciclo-menstrual-dois.module').then(m => m.CicloMenstrualDoisPageModule), canActivate: [AuthGuard] },
  { path: 'metodo-contraceptivo', loadChildren: () => import('./pages/metodo-contraceptivo/metodo-contraceptivo.module').then(m => m.MetodoContraceptivoPageModule), canActivate: [AuthGuard] },
  { path: 'uso-contracep', loadChildren: () => import('./pages/uso-contracep/uso-contracep.module').then(m => m.UsoContracepPageModule), canActivate: [AuthGuard] },
  { path: 'uso-adolecentes', loadChildren: () => import('./pages/uso-adolecentes/uso-adolecentes.module').then(m => m.UsoAdolecentesPageModule), canActivate: [AuthGuard] },
  { path: 'uso-emergencia', loadChildren: () => import('./pages/uso-emergencia/uso-emergencia.module').then(m => m.UsoEmergenciaPageModule), canActivate: [AuthGuard] },
  { path: 'ciclo-menstrual-tres', loadChildren: () => import('./pages/ciclo-menstrual-tres/ciclo-menstrual-tres.module').then(m => m.CicloMenstrualTresPageModule), canActivate: [AuthGuard] },
  { path: 'sintomas', loadChildren: () => import('./pages/sintomas/sintomas.module').then(m => m.SintomasPageModule), canActivate: [AuthGuard] },
  { path: 'sexo', loadChildren: () => import('./pages/sexo/sexo.module').then(m => m.SexoPageModule), canActivate: [AuthGuard] },
  { path: 'gravidez', loadChildren: () => import('./pages/gravidez/gravidez.module').then(m => m.GravidezPageModule), canActivate: [AuthGuard] },
  { path: 'desejo-sexual', loadChildren: () => import('./pages/desejo-sexual/desejo-sexual.module').then(m => m.DesejoSexualPageModule), canActivate: [AuthGuard] },
  { path: 'servicos-saude', loadChildren: () => import('./pages/servicos-saude/servicos-saude.module').then(m => m.ServicosSaudePageModule), canActivate: [AuthGuard] },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
