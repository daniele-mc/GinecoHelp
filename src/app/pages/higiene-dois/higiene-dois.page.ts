import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HealthService } from "src/app/services/health.service";
import { Health } from "src/app/interface/health";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-higiene-dois',
  templateUrl: './higiene-dois.page.html',
  styleUrls: ['./higiene-dois.page.scss'],
})
export class HigieneDoisPage implements OnInit {
  private today;
  private health: Health = {};
  private loading: any;
  private healthID: string = null;
  private healthSubscription: Subscription;

  constructor(
    public AlertController: AlertController,
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

  async presentAlert1() {
    this.saveHealth();
    const alert = await this.AlertController.create({
      header: 'Dorme com calcinha?',
      message: 'Um benefício de dispensar a calcinha na hora de dormir é arejar a região genital minimizando o surgimento de infecções vaginais.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    this.saveHealth();
    const alert = await this.AlertController.create({
      header: 'Usa absorvente interno?',
      message: 'Usar absorvente interno geralmente não faz mal à saúde, desde que a mulher troque o absorvente com regularidade (de preferência a cada 4 horas), não durma com ele e lave bem as mãos sempre antes da troca.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
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
    return this.router.navigate(["/higiene"]);
  }

  menu() {
    this.saveHealth();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveHealth();
    return this.router.navigate(["/higiene-tres"]);
  }

  async saveHealth() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {
      this.health.data = this.today;

      if (this.health.sleepPanties == null) {
        this.health.sleepPanties = "indefinido";
      }

      if (this.health.absorbentInternal == null) {
        this.health.absorbentInternal = "indefinido";
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
