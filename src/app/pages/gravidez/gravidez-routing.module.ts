import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GravidezPage } from './gravidez.page';

const routes: Routes = [
  {
    path: '',
    component: GravidezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GravidezPageRoutingModule {}
