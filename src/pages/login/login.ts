import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
import {HomePage} from '../home/home';
//import {FormGroup} from '@angular/forms';
import {Storage} from '../../providers/storage';
import {UserService} from '../../providers/user-service';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { correo: '', clave: '' };

  constructor(public navCtrl: NavController, public storage: Storage, public userService: UserService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
        
  }


  public login() {
    this.showLoading()
      console.info("*********credenciales") 
      console.log(this.registerCredentials)
      console.info("*********credenciales")   
      
      this.userService.authentification(this.registerCredentials.correo, this.registerCredentials.clave).subscribe(res => {
        let data  = res.json();
        console.log("Esta es la data")
        console.log(data)
        console.log("Esta es la data")
        this.navCtrl.setRoot(HomePage);
      
      }, error => {
          console.info("*******error**********") 
          console.log(error)
          console.info("*******error**********") 
          this.showError("Access Denied");
    
      });
    
  }
/*

constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) 
  logEvent($event){
  
    //this.navCtrl.setRoot(HomePage);
   this.userService.authentification("miguel%40tuten.cl", "1234").subscribe(res => {
    let data  = res.json();
    console.log("Esta es la data")
    console.log(data)
    console.log("Esta es la data")
  
  }, error => {
      console.info("*******error**********") 
      console.log(error)
      console.info("*******error**********") 

  });
  }
  */
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
  alert.present(prompt);
}
  createAccount($event){
      console.log("Implementar la creación para los usuarios nuevos")
  }

}
