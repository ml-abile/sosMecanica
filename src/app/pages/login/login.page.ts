import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './../../services/auth.service';
import { Users } from './../../interfaces/users';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AlertController, IonSlides, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  public userLogin: Users = {};
  public userRegister: Users = {};
  private loading: any;

  constructor(private loadingCtrl: LoadingController,
    private toastCtrlr: ToastController,
    private authService: AuthService,
    public afs: AngularFirestore,
    public alertCtrl: AlertController,
    public router: Router,) { }

  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }

  }

  async login() {
    await this.presentLoading();

    try {
     // await this.authService.login(this.userLogin);
     var objeto = await this.authService.login(this.userLogin).then(
       resultado => console.log(resultado)
     );
     console.log(objeto);
    } catch (error) {
     
      let message: string;

      switch (error.code) {
        case 'auth/user-not-found':
          message = "E-mail não existe !!";
          break;

        case 'auth/wrong-password':
          message = "Senha incorreta!!";
          break;
      }
      this.presentToast(message);
    }finally {
      this.loading.dismiss();
  }
}


  async register() {
    await this.presentLoading();

    try {
      this.userRegister.displayName = this.userRegister.nome;
      const newUser = await this.authService.register(this.userRegister);
      const newUserObject = Object.assign({}, this.userRegister);

      delete newUserObject.senha;
      await this.afs.collection('Usuarios').doc(newUser.user.uid).set(newUserObject).then(
        async () => {
          const alert = await this.alertCtrl.create({
            message: 'Cadastro realizado com sucesso !!',
            buttons: [{
              text: 'ok', handler: () => {
                 this.router.navigateByUrl('/login');
              },
            },],
          });
          await alert.present();
        })
    } catch (error) {
      console.log(error.code);
      let message: string;
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'E-mail já sendo usado por outro usuário!';
          break;

        case 'auth/invalid-email':
          message = 'E-mail inválido!';
          break;

        case 'auth/argument-error':
          message = "Preencha todos os campos!";
          break;

          case 'auth/weak-password':
            message = "Digite uma senha com mais de 6 caracteres!";
            break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde ...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrlr.create({ message, duration: 2000, position: 'middle' });
    toast.present();
  }
}
