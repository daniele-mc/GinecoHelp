import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-desejo-sexual',
  templateUrl: './desejo-sexual.page.html',
  styleUrls: ['./desejo-sexual.page.scss'],
})
export class DesejoSexualPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'How to achieve orgasm?',
      message: 'The organ of orgasm in women is the clitoris. Less than 30% of women experience orgasm with the movement of the penis inside the vagina. 70% depend on manipulation of the clitoris (masturbation).',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Sexual abuse',
      message: 'If you have suffered sexual abuse talk to your gynecologist or a psychologist who can help you.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
