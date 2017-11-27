import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosPage } from '../pedidos/pedidos';
import { UserloginPage } from '../userlogin/userlogin';
import { Status } from '../../app/status'
import { Http } from '@angular/http';
 

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})

export class CarrinhoPage {
  public carrinho: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public st: Status, public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
    this.carrinho = this.st.carrinho;
    console.log(this.carrinho);
  }

  LetsGoNovoCompra(){
    var data = {};
    data['usuario'] = this.st.usuario;
    data['carrinho'] = this.st.carrinho;

    let req = this.http.post(this.st.URL_COMPRA, data);
    req.subscribe(data => {
      while(this.st.carrinho.length){this.st.carrinho.pop();}
  		this.navCtrl.push(PedidosPage);
    });
  }

  remove(produto) {
    var carrinho = this.st.carrinho.filter(item => {
      return item != produto;
    });
    this.st.carrinho = carrinho;
    this.carrinho = this.st.carrinho;
  }
}

