import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule }           from '@angular/platform-browser';
import { ErrorHandler, NgModule }  from '@angular/core';
import { StatusBar }               from '@ionic-native/status-bar';
import { MyApp }                   from './app.component';
import { HomePage }                from '../pages/home/home';
import { CadastroPage }            from '../pages/cadastro/cadastro';
import { UserloginPage }           from '../pages/userlogin/userlogin';
import { ContatoPage }             from '../pages/contato/contato';
import { PedidosPage }             from '../pages/pedidos/pedidos';
import { CarrinhoPage }            from '../pages/carrinho/carrinho';
import { PerfilPage }              from '../pages/perfil/perfil';
import { EmpresaPage }             from '../pages/empresa/empresa';
import { ProdutoPage }             from '../pages/produto/produto';
import { EmpresaProdutosPage }     from '../pages/empresa-produtos/empresa-produtos';
import { EmpresaNovoProdutoPage }  from '../pages/empresa-novo-produto/empresa-novo-produto';
import { EmpresaPerfilPage }       from '../pages/empresa-perfil/empresa-perfil';
import { EmpresaAtualizarPage }    from '../pages/empresa-atualizar/empresa-atualizar';
import { Camera }                  from '@ionic-native/camera';
import { ParallaxDirective }       from '../directives/parallax/parallax';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { Status } from './status';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    UserloginPage,
    ContatoPage,
    PedidosPage,
    CarrinhoPage,
    PerfilPage,
    EmpresaPage,
    EmpresaProdutosPage,
    EmpresaNovoProdutoPage,
    EmpresaPerfilPage,
    EmpresaAtualizarPage,
    ParallaxDirective,
    ProdutoPage,
    DetalhesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    UserloginPage,
    ContatoPage,
    PedidosPage,
    CarrinhoPage,
    PerfilPage,
    EmpresaPage,
    EmpresaProdutosPage,
    EmpresaNovoProdutoPage,
    EmpresaPerfilPage,
    EmpresaAtualizarPage,
    ProdutoPage,
    DetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    ParallaxDirective,
    Status,
  ]
})
export class AppModule {}
