import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-uso-adolecentes',
  templateUrl: './uso-adolecentes.page.html',
  styleUrls: ['./uso-adolecentes.page.scss'],
})
export class UsoAdolecentesPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Adolescente pode usar DIU?',
      message: 'O uso de DIU por adolescentes é um método muito seguro.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'DIU provoca alguma infecção?',
      message: 'O DIU não provoca infecções. Estas são causados por relações sexuais desprotegidas.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert3() {
    const alert = await this.AlertController.create({
      header: 'Perigoso engravidar na troca de anticoncepcional?',
      message: '',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
