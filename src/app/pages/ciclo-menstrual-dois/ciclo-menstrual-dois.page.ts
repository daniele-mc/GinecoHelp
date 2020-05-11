import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-ciclo-menstrual-dois',
  templateUrl: './ciclo-menstrual-dois.page.html',
  styleUrls: ['./ciclo-menstrual-dois.page.scss'],
})
export class CicloMenstrualDoisPage implements OnInit {

  dateRange: { from: string; to: string; };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor() { }


  ngOnInit() {

  }


}
