import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HealthService } from 'src/app/services/health.service';
import { Health } from 'src/app/interface/health';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-saude-vaginal',
  templateUrl: './saude-vaginal.page.html',
  styleUrls: ['./saude-vaginal.page.scss'],
})
export class SaudeVaginalPage implements OnInit {

  private health: Health = {};
  private loading: any;
  private healthID: string = null;
  private healthSubscription: Subscription;

  public corrimento: any[] = [];
  public coceira: boolean;



  constructor(
    private healthService: HealthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
  ) {

    // vai verificar se health id existe, se nao, cria um novo
    this.healthID = this.activeRoute.snapshot.params['id'];
    if (this.healthID) this.loadHealth();

  }

  corrimentoHandler(event: any) {
    this.corrimento.push(event.target.checked);
    console.log(this.corrimento);

  }

  ngOnInit() {

  }

  loadHealth() {
    this.healthSubscription = this.healthService.getHealth(this.healthID).subscribe(data => {
      this.health = data
    });
  }

  async saveHealth() {
    await this.presentLoading();
    this.health.userID = this.authService.getAuth().currentUser.uid;
    if (this.healthID) {

    } else {

      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();

      this.health.data = day + "-" + month + "-" + year;

      if ((this.health.ardor) == null) {
        this.health.ardor = "indefinido";
      }

      if ((this.health.dorNaRelacao) == null) {
        this.health.dorNaRelacao = "indefinido";
      }

      try {
        await this.healthService.addHealth(this.health);
        await this.loading.dismiss();

      } catch (error) {
        console.log(error);
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();

      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
