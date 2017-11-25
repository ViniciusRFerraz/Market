import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UserloginPage } from '../pages/userlogin/userlogin';
import { ContatoPage } from '../pages/contato/contato';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { PerfilPage } from '../pages/perfil/perfil';
import { EmpresaPage } from '../pages/empresa/empresa';
import { EmpresaProdutosPage } from '../pages/empresa-produtos/empresa-produtos';
import { EmpresaNovoProdutoPage } from '../pages/empresa-novo-produto/empresa-novo-produto';
import { EmpresaPerfilPage } from '../pages/empresa-perfil/empresa-perfil';
import { EmpresaAtualizarPage } from '../pages/empresa-atualizar/empresa-atualizar';
import { Camera } from '@ionic-native/camera';
import { ParallaxDirective } from '../directives/parallax/parallax';
import { DetalhesPage } from '../pages/detalhes/detalhes';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
