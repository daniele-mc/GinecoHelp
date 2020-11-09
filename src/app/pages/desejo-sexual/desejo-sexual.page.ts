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
  selector: 'app-desejo-sexual',
  templateUrl: './desejo-sexual.page.html',
  styleUrls: ['./desejo-sexual.page.scss'],
})
export class DesejoSexualPage implements OnInit {
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

  async presentAlert3() {
    this.saveQuestions();
    const alert = await this.AlertController.create({
      header: 'É normal não sentir desejo sexual nas relações sexuais?',
      message: 'Não é normal. Se isso acontecer é  porque tem algum problema e é preciso perguntar ao ginecologista o que pode ser feito para melhorar o desejo sexual.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert1() {
    this.saveQuestions();
    const alert = await this.AlertController.create({
      header: 'Como conseguir ter  orgasmo?',
      message: 'O órgão do orgasmo na mulher é o clitóris. Menos de 30% das mulheres tem orgasmo com o movimento do pênis dentro da vagina. 70% dependem de manipulação do clitóris (masturbação).',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    this.saveQuestions();
    const alert = await this.AlertController.create({
      header: 'Abuso sexual',
      message: 'Se você sofreu abuso sexual fale com seu ginecologista ou com um psicólogo que eles podem te ajudar.',
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
    return this.router.navigate(["/saude-relacoes"]);
  }

  menu() {
    this.saveQuestions();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveQuestions();
    return this.router.navigate(["/gravidez"]);
  }

  async check() {
    if ((await this.questionsService.checkExists("desejo sexual")) == true) {
      this.loadQuestions();
    }
  }

  loadQuestions() {
    this.questionsSubscription = this.questionsService.getQuestion("desejo sexual").subscribe(data => {
      this.questions = data;
    });
  }

  async saveQuestions() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {

      try {
        await this.questionsService.addQuestions(this.questions, "desejo sexual");
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
