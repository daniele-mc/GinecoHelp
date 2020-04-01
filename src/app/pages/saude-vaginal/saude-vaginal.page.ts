import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saude-vaginal',
  templateUrl: './saude-vaginal.page.html',
  styleUrls: ['./saude-vaginal.page.scss'],
})
export class SaudeVaginalPage implements OnInit {

  corrimento: any[] = [];
  ardor: any[] = [];

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.ardor = [{ id: 1, name: "Nenhum" },
      { id: 2, name: "Baixo" },
      { id: 3, name: "Médio" },
      { id: 4, name: "Intenso" }]

    })
  }

  ngOnInit() {
  }

}
