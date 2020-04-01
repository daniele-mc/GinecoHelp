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
      header: 'Calcinha',
      message: 'O principal benefício de dispensar a calcinha na hora de dormir é arejar a região genital minimizando o surgimento de infecções vaginais.',

      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Absorvente interno',
      message: 'Usar absorvente interno geralmente não faz mal à saúde, desde que a mulher troque o absorvente com regularidade (de preferência a cada 4 horas), não durma com ele e lave bem as mãos sempre antes da troca.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  ngOnInit() {
  }

}
