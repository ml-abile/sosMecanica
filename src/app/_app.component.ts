import { UsuariosService } from './services/usuarios.service';
import { DadosService } from './services/dados.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService : AuthService,
    private dadosService : DadosService,
    private usuariosService: UsuariosService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.buscarDadosUsuarios();
    });
  }

  async logout(){
    try {
      await this.authService.logout();
    } catch (error){
      console.error(error);
    }
  }

  public async buscarDadosUsuarios(){
    const user = await this.usuariosService.getById(this.dadosService.getDados('user')['user']['uid']);
    console.log(user);
  }
}
