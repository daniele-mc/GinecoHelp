import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesejoSexualPageRoutingModule } from './desejo-sexual-routing.module';

import { DesejoSexualPage } from './desejo-sexual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesejoSexualPageRoutingModule
  ],
  declarations: [DesejoSexualPage]
})
export class DesejoSexualPageModule {}
