import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-uso-emergencia',
  templateUrl: './uso-emergencia.page.html',
  styleUrls: ['./uso-emergencia.page.scss'],
})
export class UsoEmergenciaPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Is the morning-after pill a contraceptive method?',
      message: 'If you have unprotected sex you can take an emergency pill immediately. It can be taken up to 72 h after sexual relation.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
