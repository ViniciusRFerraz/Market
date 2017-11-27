import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Status } from '../../app/status'
import { Http } from '@angular/http'

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

    nome:any;
    cpf:any;
    end:any;
    tel:any;
    dono:any;
    user:any;
    pass:any;
    email:any;
    tipocadastro:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alerCtrl: AlertController, public st: Status, public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  showData() {
    console.log(this.tipocadastro);
    console.log(this.nome);
    console.log(this.cpf);
    console.log(this.end);
    console.log(this.tel);
    console.log(this.dono);
    console.log(this.user);
    console.log(this.pass);

    if (this.tipocadastro=="cliente"){
    if (this.email == null || this.nome == null || this.cpf==null || this.end==null || this.tel==null || this.user==null || this.pass==null ){
      this.doAlert();
    }
    else {
      this.doOkay();
    }
  }

  if (this.tipocadastro=="empresa"){
  if (this.nome == null || this.cpf==null || this.end==null || this.tel==null || this.user==null || this.pass==null || this.dono==null ){
    this.doAlert();
  }
  else {
    this.doOkay();
  }
}

}

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Erro!',
      message: 'Há um campo vazio!',
      buttons: ['Ok']
    });
    alert.present()
  }

  doOkay() {
    var dados = {
      nome: this.nome,
      cpf: this.cpf,
      end: this.end,
      fone: this.tel,
      login: this.user,
      senha: this.pass,
      email: this.email
    }

    let req = this.http.post(this.st.URL_CADASTRA_CLIENTE, dados);
    req.subscribe(data => {
      let alert = this.alerCtrl.create({
        title: 'Sucesso!',
        message: 'Cadastro efetuado com sucesso!',
        buttons: ['Ok']
      });
      alert.present()
    })
  }

}
