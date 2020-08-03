import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-uso-adolecentes',
  templateUrl: './uso-adolecentes.page.html',
  styleUrls: ['./uso-adolecentes.page.scss'],
})
export class UsoAdolecentesPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Can a teenager use an IUD?',
      message: 'IUD use by teenagers is a very safe method.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'IUD causes an infection?',
      message: 'The IUD does not cause infections. These are caused by unprotected sex.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert3() {
    const alert = await this.AlertController.create({
      header: 'Dangerous to get pregnant in exchange for contraceptives?',
      message: '',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
