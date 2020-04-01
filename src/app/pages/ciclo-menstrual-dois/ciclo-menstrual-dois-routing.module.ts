import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloMenstrualDoisPage } from './ciclo-menstrual-dois.page';

const routes: Routes = [
  {
    path: '',
    component: CicloMenstrualDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloMenstrualDoisPageRoutingModule {}
