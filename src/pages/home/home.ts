import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { UserloginPage } from '../userlogin/userlogin';
import { EmpresaPage } from '../empresa/empresa';
import { ParallaxDirective } from '../../directives/parallax/parallax';
import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil';
import { Camera } from '@ionic-native/camera';
import { Status } from '../../app/status'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any;
  pass:any;
  tpyHomeLogin:any;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public status: Status, public http: Http) {
    this.tpyHomeLogin = 'cliente';
  }

  letsGoCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  letsGoLogin(){
    if (this.tpyHomeLogin=="cliente"){
      let url = this.status.URL_LOGIN + this.user + '/' + this.pass + '/';
      let data = this.http.get(url);
      data.subscribe(data => {
        let dados = data.json();
        if (dados.status == 'ok') {
          let usuario = JSON.parse(dados.dados)[0];
          this.status.usuario = usuario;
          this.navCtrl.setRoot(UserloginPage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: 'Usuário ou senha incorreto',
            buttons: ['Ok']
          });
          alert.present();
        }

      });
    }
    if (this.tpyHomeLogin=="empresa") {
      this.navCtrl.setRoot(EmpresaPerfilPage);
    console.log(this.tpyHomeLogin);
    console.log(this.user);
    console.log(this.pass);
  }
  }

}
