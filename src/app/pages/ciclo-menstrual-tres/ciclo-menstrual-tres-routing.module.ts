import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloMenstrualTresPage } from './ciclo-menstrual-tres.page';

const routes: Routes = [
  {
    path: '',
    component: CicloMenstrualTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloMenstrualTresPageRoutingModule {}
