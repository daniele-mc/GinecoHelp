import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosSaudePageRoutingModule } from './servicos-saude-routing.module';

import { ServicosSaudePage } from './servicos-saude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosSaudePageRoutingModule
  ],
  declarations: [ServicosSaudePage]
})
export class ServicosSaudePageModule {}
