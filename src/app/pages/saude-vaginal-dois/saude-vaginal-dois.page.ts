import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HealthService } from "src/app/services/health.service";
import { Health } from "src/app/interface/health";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-saude-vaginal-dois',
  templateUrl: './saude-vaginal-dois.page.html',
  styleUrls: ['./saude-vaginal-dois.page.scss'],
})
export class SaudeVaginalDoisPage implements OnInit {
  private today;
  private health: Health = {};
  private loading: any;
  private healthID: string = null;
  private healthSubscription: Subscription;

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
    console.log((this.today))
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
    return this.router.navigate(["/saude-vaginal"]);
  }

  menu() {
    this.saveHealth();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveHealth();
    return this.router.navigate(["/higiene"]);
  }

  tip() {
    this.saveHealth();
    return this.router.navigate(["/saude-vaginal-dois-dicas"]);
  }

  async saveHealth() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {
      this.health.data = this.today;

      if (this.health.bleeding == null) {
        this.health.bleeding = "indefinido";
      }

      if (this.health.colic == null) {
        this.health.colic = "indefinido";
      }

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
