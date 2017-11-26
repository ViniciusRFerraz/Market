import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserloginPage } from '../userlogin/userlogin'
import { Status } from '../../app/status'

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})

export class ProdutoPage {
	public product;	
 	constructor(public navCtrl: NavController, 
				public navParams: NavParams, public st: Status) {
 		this.product = navParams.get("send");
	}

	ionViewDidLoad() {
  		console.log("receive:", this.product);
	}

  add() {
    this.st.carrinho.push(this.product);
  }
}
