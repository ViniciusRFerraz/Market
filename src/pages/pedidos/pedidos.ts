import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';
import { Status } from '../../app/status'
import { Http } from '@angular/http'


@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

	pedidos: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public st: Status, public http: Http) {
	}

	getPedidos(){
		//Adicionar aqui todos as compraas do cliente, puxadas do banco de dados
    let data = this.http.get(this.st.URL_PEDIDOS + this.st.usuario['pk']);
    data.subscribe(data => {
      let dados = data.json();
      this.pedidos = dados['results'];
      for (var p in this.pedidos) {
        var valor_total = 0;
        for (var produto in this.pedidos[p]['produtos']) {
          let prod = this.pedidos[p]['produtos'][produto];
          valor_total += parseFloat(prod['produto']['preco']) * parseFloat(prod['quantidade']);
        }
        this.pedidos[p]['valor'] = valor_total;
      }
      console.log(this.pedidos)
    });
  }

	ionViewDidLoad() {
  		console.log('ionViewDidLoad PedidosPage');
  		this.getPedidos();
	}

  goToDetails(pedido) {
    this.st.pedido_atual = pedido;
    this.navCtrl.push(DetalhesPage);
  }

}
