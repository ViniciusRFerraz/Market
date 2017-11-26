import { Injectable } from '@angular/core';

@Injectable()
export class Status {
  public URL: string;
  public URL_STORE: string;
  public URL_LOGIN: string;
  public URL_PEDIDOS: string;
  public usuario: string;
  public pedido_atual: string;

  constructor() {
    this.URL = 'http://localhost:8000';
    this.URL_STORE = this.URL + '/store';
    this.URL_LOGIN = this.URL_STORE + '/do_login/';
    this.URL_PEDIDOS = 'http://localhost:8000/compras/?cliente='

    this.usuario = null;
    this.pedido_atual = null;
  }
}
