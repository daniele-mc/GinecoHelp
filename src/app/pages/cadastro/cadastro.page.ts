import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public user: any = {};
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
  }
  ngOnInit() { }


  async register() {
    await this.presentLoading();
    try {
      if (this.user.name == null){
        console.log("nome: ",this.user.name);
      }
      else if (this.user.birthDate == null){
        console.log("aniversario:",this.user.birthDate);
      }
      else{
        const newUser = await this.authService.register(this.user);
        const newUserObject = Object.assign({}, this.user);
        delete newUserObject.password;
        await this.afs.collection('Users').doc(newUser.user.uid).set(newUserObject);
      }
      /*
      const newUser = await this.authService.register(this.user);
      const newUserObject = Object.assign({}, this.user);
      delete newUserObject.password;
      await this.afs.collection('Users').doc(newUser.user.uid).set(newUserObject);
      */
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

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  back() {
    return this.router.navigate(["/objetivos"]);
  }


}
