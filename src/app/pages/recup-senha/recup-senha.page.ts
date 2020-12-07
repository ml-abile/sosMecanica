import { Usuario } from './../../models/usuario';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recup-senha',
  templateUrl: './recup-senha.page.html',
  styleUrls: ['./recup-senha.page.scss'],
})
export class RecupSenhaPage implements OnInit {

  public user: Usuario;
  constructor(private authService: AuthService, public alertController: AlertController, public router: Router, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async resetSenha() {
    try {
      await this.authService.resetSenha(this.user)
        .then((
          async () => {
            const alert = await this.alertController.create({
              message: 'Verifique seu e-mail !!',
              buttons: [{
                text: 'ok', handler: () => {
                  this.router.navigateByUrl('/login');
                },
              },],
            });
            await alert.present();
          }))
    } catch (error) {

      let message: string;

      switch (error.code) {
        case 'auth/invalid-email':
          message = "E-mail inválido !!";
          break;

        case 'auth/user-not-found':
          message = "E-mail não encontrado!!";
          break;
      }
      this.presentToast(message);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000, position: 'middle' });
    toast.present();
  }
}


