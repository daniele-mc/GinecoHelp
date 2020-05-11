import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesejoSexualPage } from './desejo-sexual.page';

const routes: Routes = [
  {
    path: '',
    component: DesejoSexualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesejoSexualPageRoutingModule {}
