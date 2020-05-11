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
      header: 'Pode fazer sexo na gravidez?',
      message: 'Sim, se a gravidez for normal. fale com seu médico, ele vai dizer se está tudo bem.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Quanto tempo após o parto pode fazer sexo?',
      message: 'O retorno às relações sexuais depende do tipo de parto. se for normal, sem episio é mais breve mas se for cesárea varia em torno de 6 a 8 semanas.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
