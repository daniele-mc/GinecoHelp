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
      header: 'Como conseguir ter  orgasmo',
      message: 'O órgão do orgasmo na mulher é o clitóris. Menos de 30% das mulheres tem orgasmo com o movimento do pênis dentro da vagina. 70% dependem de manipulação do clitóris (masturbação)',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Abuso sexual',
      message: 'Se você sofreu abuso sexual fale com seu ginecologista ou com um psicólogo que eles podem te ajudar',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
