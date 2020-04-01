import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloMenstrualPage } from './ciclo-menstrual.page';

const routes: Routes = [
  {
    path: '',
    component: CicloMenstrualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloMenstrualPageRoutingModule { }
