import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController }from 'ionic-angular';
import { Component } 		from '@angular/core';
import { ContatoPage } 		from '../contato/contato';
import { PedidosPage } 		from '../pedidos/pedidos';
import { CarrinhoPage } 	from '../carrinho/carrinho';
import { PerfilPage } 		from '../perfil/perfil';
import { HomePage } 		from '../home/home';
import { ProdutoPage } 		from '../produto/produto';
import { Status } from '../../app/status';
import { Http } from '@angular/http';

@IonicPage()
@Component({
	selector: 'page-userlogin',
	templateUrl: 'userlogin.html',
})

export class UserloginPage {

	SearchQuery: string = '';	// Variável para pesquisa
	items: object[];			// Variável para armazenar os resultados
  produtos: object[];

	constructor(public navCtrl: NavController, public navParams: NavParams, 
    public loadingCtrl: LoadingController, public st: Status,
    public http: Http) {
	  this.initializeItems();
	}

	// Busca
	getItems(ev: any){
		// Seta a pesquisa na variável
		let val = ev.target.value;

		/* Filtra de acordo com o que está no searchbar
		O processo funciona de forma automatica enquanto está sendo digitado.
		Selecionando aquilo que *CONTÉM* o que atualmente está no SearchBar	*/
		if (val && val.trim() != ''){
			this.items = this.produtos.filter((item) => {
        return (
          (item['nome'].toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item['marca']['nome'].toLowerCase().indexOf(val.toLowerCase()) > -1));

			})
    } else {
      this.items = this.produtos;
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
    let req = this.http.get(this.st.URL_PRODUTOS);
    req.subscribe(data => {
      var resp = data.json();
      this.produtos = resp['results'];
      this.items = this.produtos;
      console.log(this.items);
    });
	}

	// ao clicar em algum item da busca, leva à pagina do item
	OpenItem(item: any){
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
