import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaProdutosPage } from '../empresa-produtos/empresa-produtos';
import { EmpresaNovoProdutoPage } from '../empresa-novo-produto/empresa-novo-produto';
import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil';
import { EmpresaAtualizarPage } from '../empresa-atualizar/empresa-atualizar';
import { HomePage } from '../home/home';
import { DetalhesPage } from '../detalhes/detalhes';

/**
  *
  *
  *     PAGINA RESPONSÁVEL PELOS Detalhes DOS PEDIDOS QUE A EMPRESA RECEBEU QUANDO O CLIENTE CONFIRMOU O PEDIDO
  *
  *
 */

@IonicPage()
@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html',
})
export class EmpresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPage');
  }

  showDetails() {
      this.navCtrl.push(DetalhesPage);



  }
}
