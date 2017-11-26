import { Component } from '@angular/core';
import { Status } from '../../app/status';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  produtos: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public st: Status) {
    this.produtos = this.st.pedido_atual['produtos'];
    console.log(this.st);
    console.log(this.produtos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
