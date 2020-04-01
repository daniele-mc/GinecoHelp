import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeVaginalDicasPage } from './saude-vaginal-dicas.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeVaginalDicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeVaginalDicasPageRoutingModule {}
