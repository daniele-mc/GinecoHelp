import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  public email: string;
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    return this.router.navigate(["/login"]);
  }

  async sendChangePassword() {
    this.authService.resetPassword(this.email);
  }

}
