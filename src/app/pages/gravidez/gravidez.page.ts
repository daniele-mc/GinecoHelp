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
  selector: 'app-gravidez',
  templateUrl: './gravidez.page.html',
  styleUrls: ['./gravidez.page.scss'],
})
export class GravidezPage implements OnInit {
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
      header: 'Pode fazer sexo na gravidez?',
      message: 'Sim, se a gravidez for normal. fale com seu médico, ele vai dizer se está tudo bem.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    this.saveQuestions();
    const alert = await this.AlertController.create({
      header: 'Quanto tempo após o parto pode fazer sexo?',
      message: 'O retorno às relações sexuais depende do tipo de parto. se for normal, sem episio é mais breve mas se for cesárea varia em torno de 6 a 8 semanas.',
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
    return this.router.navigate(["/desejo-sexual"]);
  }

  menu() {
    this.saveQuestions();
    return this.router.navigate(["/opcoes"]);
  }

  next() {
    this.saveQuestions();
    return this.router.navigate(["/servicos-saude"]);
  }

  async check() {
    if ((await this.questionsService.checkExists("gravidez")) == true) {
      this.loadQuestions();
    }
  }

  loadQuestions() {
    this.questionsSubscription = this.questionsService.getQuestion("gravidez").subscribe(data => {
      this.questions = data;
    });
  }

  async saveQuestions() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {
    } else {

      try {
        await this.questionsService.addQuestions(this.questions, "gravidez");
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
