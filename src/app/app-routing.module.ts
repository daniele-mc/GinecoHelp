import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'objetivos', loadChildren: () => import('./pages/objetivos/objetivos.module').then(m => m.ObjetivosPageModule) },
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'opcoes', loadChildren: () => import('./pages/opcoes/opcoes.module').then(m => m.OpcoesPageModule) },
  { path: 'saude-vaginal', loadChildren: () => import('./pages/saude-vaginal/saude-vaginal.module').then(m => m.SaudeVaginalPageModule) },
  { path: 'saude-vaginal-dicas', loadChildren: () => import('./pages/saude-vaginal-dicas/saude-vaginal-dicas.module').then(m => m.SaudeVaginalDicasPageModule) },
  { path: 'saude-vaginal-dois', loadChildren: () => import('./pages/saude-vaginal-dois/saude-vaginal-dois.module').then(m => m.SaudeVaginalDoisPageModule) },
  { path: 'saude-vaginal-dois-dicas', loadChildren: () => import('./pages/saude-vaginal-dois-dicas/saude-vaginal-dois-dicas.module').then(m => m.SaudeVaginalDoisDicasPageModule) },
  { path: 'saude-relacoes', loadChildren: () => import('./pages/saude-relacoes/saude-relacoes.module').then(m => m.SaudeRelacoesPageModule) },
  { path: 'higiene', loadChildren: () => import('./pages/higiene/higiene.module').then(m => m.HigienePageModule) },
  { path: 'higiene-dois', loadChildren: () => import('./pages/higiene-dois/higiene-dois.module').then(m => m.HigieneDoisPageModule) },
  { path: 'higiene-tres', loadChildren: () => import('./pages/higiene-tres/higiene-tres.module').then(m => m.HigieneTresPageModule) },
  { path: 'ciclo-menstrual', loadChildren: () => import('./pages/ciclo-menstrual/ciclo-menstrual.module').then(m => m.ClicoMenstrualPageModule) },
  { path: 'ciclo-menstrual-dois', loadChildren: () => import('./pages/ciclo-menstrual-dois/ciclo-menstrual-dois.module').then(m => m.CicloMenstrualDoisPageModule) },
  { path: 'metodo-contraceptivo', loadChildren: () => import('./pages/metodo-contraceptivo/metodo-contraceptivo.module').then(m => m.MetodoContraceptivoPageModule) },
  { path: 'uso-contracep', loadChildren: () => import('./pages/uso-contracep/uso-contracep.module').then(m => m.UsoContracepPageModule) },
  { path: 'uso-adolecentes', loadChildren: () => import('./pages/uso-adolecentes/uso-adolecentes.module').then(m => m.UsoAdolecentesPageModule) },
  { path: 'uso-emergencia', loadChildren: () => import('./pages/uso-emergencia/uso-emergencia.module').then(m => m.UsoEmergenciaPageModule) },
  {
    path: 'ciclo-menstrual-tres',
    loadChildren: () => import('./pages/ciclo-menstrual-tres/ciclo-menstrual-tres.module').then( m => m.CicloMenstrualTresPageModule)
  },
  {
    path: 'sintomas',
    loadChildren: () => import('./pages/sintomas/sintomas.module').then( m => m.SintomasPageModule)
  },
  {
    path: 'sexo',
    loadChildren: () => import('./pages/sexo/sexo.module').then( m => m.SexoPageModule)
  },
  {
    path: 'gravidez',
    loadChildren: () => import('./pages/gravidez/gravidez.module').then( m => m.GravidezPageModule)
  },
  {
    path: 'desejo-sexual',
    loadChildren: () => import('./pages/desejo-sexual/desejo-sexual.module').then( m => m.DesejoSexualPageModule)
  },
  {
    path: 'servicos-saude',
    loadChildren: () => import('./pages/servicos-saude/servicos-saude.module').then( m => m.ServicosSaudePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
