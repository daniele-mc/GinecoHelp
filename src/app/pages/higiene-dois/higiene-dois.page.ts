import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-higiene-dois',
  templateUrl: './higiene-dois.page.html',
  styleUrls: ['./higiene-dois.page.scss'],
})
export class HigieneDoisPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Do you sleep with panties?',
      message: 'The main benefit of dispensing panties at bedtime is to aerate the genital area minimizing the appearance of vaginal infections.',

      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Do you use absorbent internal?',
      message: 'Using absorbent interna generally does not harm your health, as long as the woman changes the absorbent interna regularly (preferably every 4 hours), do not sleep with it and wash your hands well before changing.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  ngOnInit() {
  }

}
