import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gravidez',
  templateUrl: './gravidez.page.html',
  styleUrls: ['./gravidez.page.scss'],
})
export class GravidezPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Can you have sex during pregnancy?',
      message: 'Yes, if the pregnancy is normal. Talk to your doctor, he will tell you if everything is fine.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'How long after childbirth can you have sex?',
      message: 'The return to sexual relations depends on the type of childbirth. If it is normal, without an episode it is shorter but if it is cesarean it varies around 6 to 8 weeks.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
