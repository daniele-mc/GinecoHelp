import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CicloMenstrualDoisPageRoutingModule } from './ciclo-menstrual-dois-routing.module';

import { CicloMenstrualDoisPage } from './ciclo-menstrual-dois.page';
import { CalendarModule } from 'ion2-calendar';

import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloMenstrualDoisPageRoutingModule,
    CalendarModule,
    NgCalendarModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  declarations: [CicloMenstrualDoisPage]
})
export class CicloMenstrualDoisPageModule { }