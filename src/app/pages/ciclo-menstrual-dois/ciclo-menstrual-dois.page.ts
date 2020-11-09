import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Platform, LoadingController, ToastController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HealthService } from "src/app/services/health.service";
import { Health } from "src/app/interface/health";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { resolve } from 'url';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-ciclo-menstrual-dois',
  templateUrl: './ciclo-menstrual-dois.page.html',
  styleUrls: ['./ciclo-menstrual-dois.page.scss'],
})
export class CicloMenstrualDoisPage implements OnInit {

  public healthCollection: AngularFirestoreCollection<Health>;
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

  eventSource = [];
  
  selectedDate = new Date();
  
  calendar = { 
    mode: 'month', 
    currentDate: ''
  }

  viewTitle;

  //@ViewChild(CalendarComponent) myCal: CalendarComponent;
  
  constructor(
    private healthService: HealthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    public modalCtrl: ModalController,
    private db: AngularFirestore,

  ) {  }
 
  async load(){
    this.eventSource = this.createEvents();
  }

  createEvents() {
    var events = [];
    var startTime = new Date(this.startY, this.startM, this.startD);
    var endTime = new Date(this.endY, this.endM, this.endD);
    events.push({
        title: 'Menstruação',
        startTime: startTime,
        endTime: endTime,
        allDay: false,
        eventColor: 'red'
    });
       
    return events;
  }
   

  async ngOnInit() {
    
    await this.formattingDay();
    await this.check();
    await this.loadHealth();

    setTimeout(this.load, 1000);    
    
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async formattingDay() {
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

  }

  async check() {
    if ((await this.healthService.checkExists(this.today)) == true) {
      await this.loadHealth();
      
    }
    console.log("check");
  }

  async loadHealth() {
    
    await (this.healthSubscription = await this.healthService.getHealth(this.today).subscribe(data => {
      this.health = data;
      this.startD = data.startDay;
      this.startM = data.startMonth;
      this.startY = data.startYear;
      this.endD = data.endDay;
      this.endM = data.endMonth;
      this.endY = data.endYear;
        
      console.log("data: ",this.startY, this.startM, this.startD);   
        
      }));
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