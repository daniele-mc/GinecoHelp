import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saude-vaginal-dicas',
  templateUrl: './saude-vaginal-dicas.page.html',
  styleUrls: ['./saude-vaginal-dicas.page.scss'],
})
export class SaudeVaginalDicasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saudeVaginal() {
    return this.router.navigate(["/saude-vaginal"]);
  }

}
