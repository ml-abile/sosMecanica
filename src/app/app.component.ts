import { Usuario } from './models/usuario';
import { UsuariosService } from './services/usuarios.service';
import { DadosService } from './services/dados.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public userLogado: Usuario;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private dadosService: DadosService,
    private usuariosService: UsuariosService,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onMenuOpen() {
    this.buscarDadosUsuarios();
  }

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    }
  }

  ionViewWillEnter() {
    this.buscarDadosUsuarios();
  }
  
  public async buscarDadosUsuarios() {
    const user = await this.dadosService.getDados('user');
    if (user) {
      this.usuariosService.getById(user.uid).then(dadosUser => {
        this.userLogado = dadosUser;
      });
      console.log(this.userLogado);
    }
  }


}
