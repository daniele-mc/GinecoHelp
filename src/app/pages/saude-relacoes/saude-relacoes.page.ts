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
  selector: 'app-saude-relacoes',
  templateUrl: './saude-relacoes.page.html',
  styleUrls: ['./saude-relacoes.page.scss'],
})
export class SaudeRelacoesPage implements OnInit {
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
      header: 'Fazer sexo oral e/ou anal sem proteção pode pegar uma infecção sexualmente transmissível?',
      message: 'Sim. Pode ser contaminado por HPV, gonorréia, clamídia e outras infecções sexualmente transmissíveis.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    this.saveQuestions();
    const alert = await this.AlertController.create({
      header: 'Fazer sexo sem camisinha pode levar a ter infecções sexualmente transmissíveis?',
      message: 'Fazer sexo sem camisinha pode levar a infecções sexualmente transmissíveis e essas infecções podem entupir as trompas e impedir a mulher de engravidar.',
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
    return this.router.navigate(["/sexo"]);
  }

  menu() {
    this.saveQuestions();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveQuestions();
    return this.router.navigate(["/desejo-sexual"]);
  }

  async check() {
    if ((await this.questionsService.checkExists("saude relacoes")) == true) {
      this.loadQuestions();
    }
  }

  loadQuestions() {
    this.questionsSubscription = this.questionsService.getQuestion("saude relacoes").subscribe(data => {
      this.questions = data;
    });
  }

  async saveQuestions() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {

      try {
        await this.questionsService.addQuestions(this.questions, "saude relacoes");
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
