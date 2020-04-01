import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-higiene',
  templateUrl: './higiene.page.html',
  styleUrls: ['./higiene.page.scss'],
})
export class HigienePage implements OnInit {

  //constructor() { }

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Ducha vaginal/higiênica',
      message: 'Artigos científicos mostram que não se deve usar ducha vaginal diretamente na vagina porque muda a flora vaginal e aumenta o risco de infecções.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Protetor diário',
      message: 'Estudos ginecológicos mostram que usar protetor diário constantemente aquece e altera a pele, predispondo a infecções genitais.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  ngOnInit() {
  }
}



