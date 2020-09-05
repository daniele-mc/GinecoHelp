import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.page.html',
  styleUrls: ['./objetivos.page.scss'],
})
export class ObjetivosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerPage() {
    return this.router.navigate(["/cadastro"]);
  }

  loginPage() {
    return this.router.navigate(["/login"]);
  }

}
