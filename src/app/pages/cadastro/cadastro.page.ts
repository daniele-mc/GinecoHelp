import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  //export class CadastroPage extends LoginPage implements OnInit {
  //public userRegister: User = {};
  constructor() {
    //super();
  }
  ngOnInit() { }
  /*
    async register() {
      await this.presentLoading();
  
      try {
        await this.authService.register(this.userRegister);
      } catch (error) {
        console.error(error);
        let message: string;
        switch (error.code) {
          case 'auth/email-already-in-use':
            message = 'E-mail já utilizado!';
            break;
          case 'auth/invalid-email':
            message = 'E-mail inválido!';
            break;
          case 'auth/weak-password':
            message = 'Senha inválida! Por favor, digite uma com mais de 6 caracteres!'
            break;
        }
  
        this.presentToast(message);
  
      } finally {
        this.loading.dismiss();
      }
  
    }
  */
}
