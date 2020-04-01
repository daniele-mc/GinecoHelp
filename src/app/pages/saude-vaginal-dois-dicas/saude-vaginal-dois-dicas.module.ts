import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeVaginalDoisDicasPageRoutingModule } from './saude-vaginal-dois-dicas-routing.module';

import { SaudeVaginalDoisDicasPage } from './saude-vaginal-dois-dicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeVaginalDoisDicasPageRoutingModule
  ],
  declarations: [SaudeVaginalDoisDicasPage]
})
export class SaudeVaginalDoisDicasPageModule {}
