import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GravidezPageRoutingModule } from './gravidez-routing.module';

import { GravidezPage } from './gravidez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GravidezPageRoutingModule
  ],
  declarations: [GravidezPage]
})
export class GravidezPageModule {}
