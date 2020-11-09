import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicos-saude',
  templateUrl: './servicos-saude.page.html',
  styleUrls: ['./servicos-saude.page.scss'],
})
export class ServicosSaudePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    return this.router.navigate(["/gravidez"]);
  }

  menu() {
    return this.router.navigate(["/opcoes"]);
  }

}
