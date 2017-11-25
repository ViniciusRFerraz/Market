import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosPage } from '../pedidos/pedidos';
import { UserloginPage } from '../userlogin/userlogin';
 

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})

  export class CarrinhoPage {
	quantidade: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  LetsGoCompra(){
    this.navCtrl.setRoot(UserloginPage);
    this.navCtrl.push(PedidosPage);  
  }
}

