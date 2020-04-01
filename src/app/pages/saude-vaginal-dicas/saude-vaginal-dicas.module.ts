import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeVaginalDicasPageRoutingModule } from './saude-vaginal-dicas-routing.module';

import { SaudeVaginalDicasPage } from './saude-vaginal-dicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeVaginalDicasPageRoutingModule
  ],
  declarations: [SaudeVaginalDicasPage]
})
export class SaudeVaginalDicasPageModule {}
