import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController }from 'ionic-angular';
import { Component } 		from '@angular/core';
import { ContatoPage } 		from '../contato/contato';
import { PedidosPage } 		from '../pedidos/pedidos';
import { CarrinhoPage } 	from '../carrinho/carrinho';
import { PerfilPage } 		from '../perfil/perfil';
import { HomePage } 		from '../home/home';
import { ProdutoPage } 		from '../produto/produto';

@IonicPage()
@Component({
	selector: 'page-userlogin',
	templateUrl: 'userlogin.html',
})

export class UserloginPage {

	SearchQuery: string = '';	// Variável para pesquisa
	items: string[];			// Variável para armazenar os resultados

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				public loadingCtrl: LoadingController) {

	}

	// Busca
	getItems(ev: any){

		// Pega os itens inicializados.
		this.initializeItems();

		// Seta a pesquisa na variável
		let val = ev.target.value;

		/* Filtra de acordo com o que está no searchbar
		O processo funciona de forma automatica enquanto está sendo digitado.
		Selecionando aquilo que *CONTÉM* o que atualmente está no SearchBar	*/
		if (val && val.trim() != ''){
			this.items = this.items.filter((item) => {
				return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}

	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad UserloginPage');
  	}

  	// Vai para tela de contatos
  	LetsGoContato(){
    	this.navCtrl.push(ContatoPage);
    	console.log("Página de contatos aberta!");
  	}

  	// Vai para tela de pedidos
  	LetsGoPedidos(){
  		this.navCtrl.push(PedidosPage);
  		console.log("Página de pedidos aberta!");
  	}

  	// Vai para tela de carrinho
  	LetsGoCarrinho(){
  		this.navCtrl.push(CarrinhoPage);
  		console.log("Pagina de carrinho aberta!");
  	}

  	// Vai para tela de perfil
  	LetsGoPerfil(){
  		this.navCtrl.push(PerfilPage);
  		console.log("Pagina de perfil aberta!");
  	}

  	// Vai para tela de inicio
	LetsGoLoginUser(){
  		this.navCtrl.setRoot(HomePage);
  		console.log("Pagina de login aberta!");
  	}

  	// Inicialização dos itens
	initializeItems() {
		//Adicionar aqui todos os itens de pesquisa. Lojas e Produtos
		this.items = [
			'batman',
			'superman',
			'betman',
			'soperman',
			'bitman',
			'siperman',
			'botman',
			'seperman',
			'butman',
			'saperman'
		];
	}

	// ao clicar em algum item da busca, leva à pagina do item
	OpenItem(item: string){
		this.navCtrl.push(ProdutoPage, {send: item})
	}

	// delay
	Loading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }
}
