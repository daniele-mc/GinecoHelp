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
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {
  private today;
  private health: Health = {};
  private loading: any;
  private healthID: string = null;
  private healthSubscription: Subscription;

  form: any;

  constructor(
    public AlertController: AlertController,
    private healthService: HealthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = [
      { val: 'Tudo está bem', isChecked: false },
      { val: 'Acne', isChecked: false },
      { val: 'Dor nas costas', isChecked: false },
      { val: 'Dor muscular', isChecked: false },
      { val: 'Cãibra', isChecked: false },
      { val: 'Fadiga', isChecked: false },
      { val: 'Insônia', isChecked: false },
      { val: 'Aumento de apetite', isChecked: false },
      { val: 'Seios sensiveis', isChecked: false },
      { val: 'Inchaço', isChecked: false },
      { val: 'Náusea', isChecked: false },
      { val: 'Cólica intestinal', isChecked: false },
      { val: 'Prisão de ventre', isChecked: false },
      { val: 'Diarréia', isChecked: false },
      { val: 'Calafrios', isChecked: false },
    ];
   }

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
    return this.router.navigate(["/ciclo-menstrual-dois"]);
  }

  menu() {
    this.saveHealth();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveHealth();
    return this.router.navigate(["/ciclo-menstrual-tres"]);
  }

  async saveHealth() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {
      this.health.data = this.today;
      try {
        await this.healthService.addHealth(this.health);
        console.log("salvo");
        console.log(this.health.symptoms);
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
