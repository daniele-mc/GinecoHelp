import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HealthService } from "src/app/services/health.service";
import { Health } from "src/app/interface/health";
import { Questions } from "src/app/interface/questions";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.page.html',
  styleUrls: ['./sexo.page.scss'],
})
export class SexoPage implements OnInit {
  private health: Health = {};
  private questions: Questions = {};
  private loading: any;
  private healthID: string = null;
  private questionsSubscription: Subscription;

  constructor(
    public AlertController: AlertController,
    private questionsService: QuestionsService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  async presentAlert1() {
    this.saveQuestions();
    const alert = await this.AlertController.create({
      header: 'Existe idade ideal para a menina começar a fazer sexo?',
      message: 'A menina deveria esperar até os 16 anos para começar a ter relação sexual. Por que? Ter sexo antes de 16 anos pode levar a arrependimento, depressão e aumento de doenças no útero.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    this.saveQuestions();
    const alert = await this.AlertController.create({
      header: 'Pode usar o mesmo preservativo no sexo vaginal e anal?',
      message: 'Se começar com o sexo anal precisa trocar a camisinha para fazer sexo vaginal.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
    this.check();
  }

  back() {
    this.saveQuestions();
    return this.router.navigate(["/uso-emergencia"]);
  }

  menu() {
    this.saveQuestions();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveQuestions();
    return this.router.navigate(["/saude-relacoes"]);
  }

  async check() {
    if ((await this.questionsService.checkExists("sexo")) == true) {
      this.loadQuestions();
    }
  }

  loadQuestions() {
    this.questionsSubscription = this.questionsService.getQuestion("sexo").subscribe(data => {
      this.questions = data;
    });
  }

  async saveQuestions() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {

      try {
        await this.questionsService.addQuestions(this.questions, "sexo");
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
