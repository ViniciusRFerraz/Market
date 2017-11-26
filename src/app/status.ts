import { Injectable } from '@angular/core';

@Injectable()
export class Status {
  public URL = 'http://localhost:8000';
  public URL_STORE = this.URL + '/store';
  public URL_LOGIN = this.URL_STORE + '/do_login/';

  public usuario = null;
}
