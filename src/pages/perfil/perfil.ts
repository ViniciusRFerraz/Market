import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { Status } from '../../app/status';
import { Http } from '@angular/http'


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  nome:any;
  email:any;
  cpf:any;
  tel:any;
  user:any;
  pass:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera:Camera,
              public st: Status, public http: Http) {
	}
 
	ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.nome = this.st.usuario['fields']['nome'];
    this.email = this.st.usuario['fields']['email'];
    this.cpf = this.st.usuario['pk'];
    this.tel = this.st.usuario['fields']['fone'];
    this.user = this.st.usuario['fields']['login'];
    this.pass = this.st.usuario['fields']['senha'];
  }

  save() {
    var dados = {
      'cpf': this.cpf,
      'nome': this.nome,
      'email': this.email,
      'fone': this.tel,
      'senha': this.pass
    }

    var req = this.http.post(this.st.URL_SALVA_CLIENTE, dados);
    req.subscribe(data => {
      console.log('salvo');
    })
  }

}
