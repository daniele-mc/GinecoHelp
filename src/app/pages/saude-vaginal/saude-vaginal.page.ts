import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HealthService } from "src/app/services/health.service";
import { Health } from "src/app/interface/health";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-saude-vaginal",
  templateUrl: "./saude-vaginal.page.html",
  styleUrls: ["./saude-vaginal.page.scss"],
})
export class SaudeVaginalPage implements OnInit {
  private health: Health = {};
  private loading: any;
  private healthID: string = null;
  private routeHealth: string;
  private healthSubscription: Subscription;
  private day = new Date().getDate();
  private month = new Date().getMonth() + 1;
  private year = new Date().getFullYear();
  private today = this.day + "-" + this.month + "-" + this.year;

  private coceira: boolean = false;

  constructor(
    private healthService: HealthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.month);
    this.check();
  }

  ngOnInit() {}

  async check() {
    if ((await this.healthService.checkExists(this.today)) == true) {
      this.loadHealth();
      //getHealth(today);
    }
    //console.log(this.healthID);
    //if (this.healthID) this.loadHealth();
  }

  corrimentoHandler(event: any) {
    this.saveHealth();
  }

  loadHealth() {
    this.healthService.getHealth(this.today);
  }

  back() {
    this.saveHealth();
    return this.router.navigate(["/opcoes"]);
  }

  menu() {
    this.saveHealth();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveHealth();
    return this.router.navigate(["/saude-vaginal-dois"]);
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

      if (this.health.ardor == null) {
        this.health.ardor = "indefinido";
      }

      if (this.health.dorNaRelacao == null) {
        this.health.dorNaRelacao = "indefinido";
      }

      if (this.coceira == false) {
        this.health.coceira = "nao";
      }

      if (this.coceira == true) {
        this.health.coceira = "sim";
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
