import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeVaginalDoisDicasPage } from './saude-vaginal-dois-dicas.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeVaginalDoisDicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeVaginalDoisDicasPageRoutingModule {}
