import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HealthService } from "src/app/services/health.service";
import { Health } from "src/app/interface/health";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ciclo-menstrual',
  templateUrl: './ciclo-menstrual.page.html',
  styleUrls: ['./ciclo-menstrual.page.scss'],
})
export class CicloMenstrualPage implements OnInit {
  private today;
  private health: Health = {};
  private loading: any;
  private healthID: string = null;
  private healthSubscription: Subscription;
  private start;
  private end;

  constructor(
    private healthService: HealthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
 
    this.formattingDay();
    this.check();
    
  }

  startCycle() {
    this.start = new Date(this.health.start);
    this.health.startDay = this.start.getDate();
    console.log("start day", this.health.startDay);
    this.health.startMonth = this.start.getMonth();
    this.health.startYear = this.start.getFullYear();
  }

  endCycle() {
    this.end = new Date(this.health.end);
    console.log(this.end.getDate());
    this.health.endDay = this.end.getDate();
    this.health.endMonth = this.end.getMonth();
    this.health.endYear = this.end.getFullYear();
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
  }

  async check() {
    if ((await this.healthService.checkExists(this.today)) == true) {
      this.loadHealth();
    }
  }

  loadHealth() {
    this.healthSubscription = this.healthService.getHealth(this.today).subscribe(data => {
      this.health = data;
    });
  }

  back() {
    this.saveHealth();
    return this.router.navigate(["/higiene-tres"]);
  }

  menu() {
    this.saveHealth();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveHealth();
    return this.router.navigate(["/ciclo-menstrual-dois"]);
  }

  async saveHealth() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {
      this.health.data = this.today;

      try {
        await this.startCycle();
        await this.endCycle();
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
