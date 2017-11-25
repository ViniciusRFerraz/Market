import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

	purchases: string[];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.getPurchases();
	}

	getPurchases(){

		//Adicionar aqui todos as compraas do cliente, puxadas do banco de dados
		this.purchases = [
			'1 panela',
			'2 garfos',
			'3 cachorros',
			'1 bomba',
			'28 pipocas',
			'15 maças',
			'1 batom'
		];
	}

	ionViewDidLoad() {
  		console.log('ionViewDidLoad PedidosPage');
	}

  goToDetails() {
    this.navCtrl.push(DetalhesPage);


  }

}
