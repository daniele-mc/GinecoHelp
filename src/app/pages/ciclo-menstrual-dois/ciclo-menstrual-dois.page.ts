import { Component, OnInit } from '@angular/core';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Platform, LoadingController, ToastController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HealthService } from "src/app/services/health.service";
import { Health } from "src/app/interface/health";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { resolve } from 'url';
import { moment } from 'ngx-bootstrap/chronos/test/chain';


@Component({
  selector: 'app-ciclo-menstrual-dois',
  templateUrl: './ciclo-menstrual-dois.page.html',
  styleUrls: ['./ciclo-menstrual-dois.page.scss'],
})
export class CicloMenstrualDoisPage implements OnInit {
  private today;
  private health: Health = {};
  private loading: any;
  private healthID: string = null;
  private healthSubscription: Subscription;

  private startD: number;
  private startM: number;
  private startY: number;

  private endD: number;
  private endM: number;
  private endY: number;


  dateRange: {
    from: Date;
    to: Date
  };
  type: 'string';
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    from: new Date(1),
    color: 'danger',
 
  };

  constructor(
    private healthService: HealthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    public modalCtrl: ModalController,

  ) { 
    
  }
  

  ionViewWillEnter() {
    
    this.formattingDay();
    this.loadHealth();
   
    console.log("aquiiiii",this.startY, this.startM, this.startD);
  }

  ngOnInit() {
    console.log("init", new Date(this.startY, this.startM, this.startD));
      
    //this.dateRange.from = new Date(this.startY, this.startM, this.startD);
    //this.dateRange.to = new Date(this.endY, this.endM, this.endY);
    //this.dateRange.from = new Date(2020, 8, 1);
    //this.dateRange.to = new Date(2020, 8, 3);
    
  }

  formattingDay() {
    var format = new Date();
    var day;
    var month;
    var year = format.getFullYear();
    var aux;

    if (format.getDate() < 10){
      day = "0"+format.getDate();
    } else {
      day = format.getDate();
    }
    if (format.getMonth()+1 < 10){
      aux = format.getMonth()+1
      month = "0"+aux;
    } else {
      month = format.getMonth()+1;
    }
    this.today = day + "-" + month + "-" + year;
    console.log("set data hoje");
  }

/*
  async check() {
    if ((await this.healthService.checkExists(this.today)) == true) {
      await this.loadHealth();
      
    }
    console.log("check");
  }*/

  async loadHealth() {   
    this.healthSubscription = await this.healthService.getHealth(this.today).subscribe(data => {
      this.health = data;
      this.startD = data.startDay;
      this.startM = data.startMonth;
      this.startY = data.startYear;
      this.endD = data.endDay;
      this.endM = data.endMonth;
      this.endY = data.endYear;
      
      console.log("data: ",this.startY, this.startM, this.startD);   
      
    });

  }

  back() {
    this.saveHealth();
    return this.router.navigate(["/ciclo-menstrual"]);
  }

  menu() {
    this.saveHealth();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveHealth();
    return this.router.navigate(["/sintomas"]);
  }

  async saveHealth() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {
      this.health.data = this.today;

      try {
        await this.healthService.addHealth(this.health);
        await this.loading.dismiss();
      } catch (error) {
        console.log(error);
        this.presentToast("Erro ao tentar salvar");
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Por favor, aguarde...",
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}

