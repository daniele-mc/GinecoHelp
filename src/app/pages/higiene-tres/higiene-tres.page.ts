import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-higiene-tres',
  templateUrl: './higiene-tres.page.html',
  styleUrls: ['./higiene-tres.page.scss'],
})
export class HigieneTresPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Do you wear warm and tight clothes?',
      message: 'The use of tight, warm clothes with synthetic fabrics, which make sweating difficult, favors the inadequate proliferation of microorganisms and can favor the appearance of infections in the genitals.',

      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Do you use soap to wash your vagina?',
      message: 'According to gynecologists, the best soap is the one with neutral pH, colorless and odorless that does not alter the self-regulation of bacteria present in the vaginal canal and in the vulva.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
