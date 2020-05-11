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
      header: 'Pílula do dia seguinte é um método anticoncepcional?',
      message: 'Se fez sexo sem proteção pode tomar pílula de emergência imediatamente. Ela pode ser tomada até 72 h depois da relação sexual.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
