import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.page.html',
  styleUrls: ['./opcoes.page.scss'],
})
export class OpcoesPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saudeVaginal() {
    return this.router.navigate(["/saude-vaginal"]);
  }

  cicloMenstrual() {
    return this.router.navigate(["/ciclo-menstrual"]);
  }

  metodoContraceptivo() {
    return this.router.navigate(["/metodo-contraceptivo"]);
  }

  sexo() {
    return this.router.navigate(["/sexo"]);
  }

  servicosSaude() {
    return this.router.navigate(["/servicos-saude"]);
  }

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    }

  }

}
