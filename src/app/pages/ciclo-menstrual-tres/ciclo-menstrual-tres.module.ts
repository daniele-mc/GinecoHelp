import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicloMenstrualTresPageRoutingModule } from './ciclo-menstrual-tres-routing.module';

import { CicloMenstrualTresPage } from './ciclo-menstrual-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloMenstrualTresPageRoutingModule
  ],
  declarations: [CicloMenstrualTresPage]
})
export class CicloMenstrualTresPageModule {}
