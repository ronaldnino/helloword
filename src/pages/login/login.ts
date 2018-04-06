import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Storage} from '../../providers/storage';
import {UserService} from '../../providers/user-service';
import {MessageService} from '../../providers/message-utilities';





@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  registerCredentials = { correo: '', clave: '' };

  constructor(public navCtrl: NavController,
              public storage: Storage, public userService: UserService,
              public messageService: MessageService) {
        
  }


  public login() {
      this.messageService.showLoading()
      this.userService.authentification(this.registerCredentials.correo, this.registerCredentials.clave).subscribe(res => {
        this.storage.data = res.json();
        this.navCtrl.setRoot(HomePage);
      }, error => {
          this.messageService.showError("Contraseña o usuario inválido");
      });
  }

  createAccount($event){
      console.log("Implementar la creación para los usuarios nuevos")
  }

}
