import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController : ToastController) { }

  async presentToast(message: string, duration: number, position: 'top' | 'middle', color: 'secondary'){
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      color
    });
    toast.present();
  }
}
