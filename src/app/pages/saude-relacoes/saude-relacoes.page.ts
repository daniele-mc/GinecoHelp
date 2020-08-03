import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saude-relacoes',
  templateUrl: './saude-relacoes.page.html',
  styleUrls: ['./saude-relacoes.page.scss'],
})
export class SaudeRelacoesPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Can having unprotected oral and / or anal sex catch a sexually transmitted infection?',
      message: 'Yes. It can be contaminated with HPV, gonorrhea, chlamydia and other sexually transmitted infections.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Can having sex without a condom lead to sexually transmitted infections?',
      message: 'Having sex without a condom can lead to sexually transmitted infections and clog the tubes preventing women from getting pregnant.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
