import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-saude-vaginal-dois-dicas',
  templateUrl: './saude-vaginal-dois-dicas.page.html',
  styleUrls: ['./saude-vaginal-dois-dicas.page.scss'],
})
export class SaudeVaginalDoisDicasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltar() {
    return this.router.navigate(["/saude-vaginal-dois"]);
  }
}
