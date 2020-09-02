import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saude-relacoes',
  templateUrl: './saude-relacoes.page.html',
  styleUrls: ['./saude-relacoes.page.scss'],
})
export class SaudeRelacoesPage implements OnInit {

  constructor(public AlertController: AlertController) { }
  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Fazer sexo oral e/ou anal sem proteção pode pegar uma infecção sexualmente transmissível?',
      message: 'Sim. Pode ser contaminado por HPV, gonorréia, clamídia e outras infecções sexualmente transmissíveis.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.AlertController.create({
      header: 'Fazer sexo sem camisinha pode levar a ter infecções sexualmente transmissíveis?',
      message: 'Fazer sexo sem camisinha pode levar a infecções sexualmente transmissíveis e entupir as trompas impedindo a mulher de engravidar.',
      buttons: ['Ok']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}
