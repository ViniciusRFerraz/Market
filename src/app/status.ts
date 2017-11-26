import { Injectable } from '@angular/core';

@Injectable()
export class Status {
  public URL: string;
  public URL_STORE: string;
  public URL_LOGIN: string;
  public URL_PEDIDOS: string;
  public URL_PRODUTOS: string;
  public usuario: object;
  public pedido_atual: object;
  public carrinho;

  constructor() {
    this.URL = 'http://localhost:8000';
    this.URL_STORE = this.URL + '/store';
    this.URL_LOGIN = this.URL_STORE + '/do_login/';
    this.URL_PEDIDOS = this.URL + '/compras/?cliente='
    this.URL_PRODUTOS = this.URL + '/produtos/?format=json'

    this.usuario = null;
    this.pedido_atual = null;
    this.carrinho = [];
  }
}
