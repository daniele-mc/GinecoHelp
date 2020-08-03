import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.page.html',
  styleUrls: ['./sexo.page.scss'],
})
export class SexoPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Is there an ideal age for a girl to start having sex?',
      message: 'The girl should wait until she is 16 years old to start having sex. Why? Having sex before the age of 16 can lead to regret, depression and increased disease in the womb.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Can you use the same condom for vaginal and anal sex?',
      message: 'If you start with anal sex you need to change the condom to have vaginal sex.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
