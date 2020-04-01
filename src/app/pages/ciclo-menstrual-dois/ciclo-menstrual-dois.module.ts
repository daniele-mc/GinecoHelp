import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicloMenstrualDoisPageRoutingModule } from './ciclo-menstrual-dois-routing.module';

import { CicloMenstrualDoisPage } from './ciclo-menstrual-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloMenstrualDoisPageRoutingModule
  ],
  declarations: [CicloMenstrualDoisPage]
})
export class CicloMenstrualDoisPageModule {}
