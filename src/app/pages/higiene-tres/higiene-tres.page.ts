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
      header: 'Roupas apertadas e justas',
      message: 'O uso de roupas apertadas, quentes e com tecidos sintéticos,  que dificultam a transpiração favorecem a proliferação inadequada de microorganismos e podem favorecer o surgimento de infecções nos genitais.',

      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Sabonete corporal',
      message: 'De acordo com as ginecologistas, o melhor sabonete é aquele com ph neutro, sem cor e sem cheiro que não altera a autorregulação das bactérias presentes no canal vaginal e na vulva.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
