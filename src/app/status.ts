import { Injectable } from '@angular/core';

@Injectable()
export class Status {
  public URL: string;
  public URL_STORE: string;
  public URL_LOGIN: string;
  public URL_PEDIDOS: string;
  public URL_PRODUTOS: string;
  public URL_COMPRA: string;
  public URL_SALVA_CLIENTE: string;
  public usuario: object;
  public pedido_atual: object;
  public carrinho;

  constructor() {
    this.URL = 'http://localhost:8000';
    this.URL_STORE = this.URL + '/store';
    this.URL_LOGIN = this.URL_STORE + '/do_login/';
    this.URL_PEDIDOS = this.URL + '/compras/?cliente='
    this.URL_PRODUTOS = this.URL + '/produtos/?format=json'
    this.URL_COMPRA = this.URL_STORE + '/compra/';
    this.URL_SALVA_CLIENTE = this.URL_STORE + '/update_cliente/';

    this.usuario = null;
    this.pedido_atual = null;
    this.carrinho = [];
  }
}
