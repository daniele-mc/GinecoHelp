import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-higiene',
  templateUrl: './higiene.page.html',
  styleUrls: ['./higiene.page.scss'],
})
export class HigienePage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Do you use a vaginal / hygienic shower?',
      message: 'Scientific articles show that you should not use a vaginal shower directly on the vagina because it changes the vaginal flora and increases the risk of infections.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Do you use daily protector?',
      message: 'Gynecological studies show that wearing a daily protector constantly warms and changes the skin, predisposing to genital infections.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  ngOnInit() {
  }
}



