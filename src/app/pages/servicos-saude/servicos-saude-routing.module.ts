import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosSaudePage } from './servicos-saude.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosSaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosSaudePageRoutingModule {}
