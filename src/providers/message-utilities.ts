
import {AlertController, LoadingController, Loading} from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class MessageService {
    loading: Loading;

    constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

    }
    
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'procesando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  
  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: text,
        buttons: ['OK']
    });
    alert.present();
  }

}
