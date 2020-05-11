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
      header: 'Existe idade ideal para a menina começar a fazer sexo?',
      message: 'A menina deveria esperar até os 16 anos para começar a ter relação sexual. Por que? Ter sexo antes de 16 anos pode levar a arrependimento, depressão e aumento de doenças no útero.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Pode usar o mesmo preservativo no sexo vaginal e anal?',
      message: 'Se começar com o sexo anal precisa trocar a camisinha para fazer sexo vaginal',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
