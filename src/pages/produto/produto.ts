import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserloginPage } from '../userlogin/userlogin'

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})

export class ProdutoPage {
	public product;	
 	constructor(public navCtrl: NavController, 
				public navParams: NavParams) {
 		this.product = navParams.get("send");
	}

	ionViewDidLoad() {
  		console.log("receive:", this.product);
	}

}