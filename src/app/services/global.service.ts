import { User } from './../interfaces/User';
import { GLOBAL } from './../global/GLOBAL';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultant } from '../interfaces/Consultant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  apiUrl = GLOBAL.apiUrl;

  constructor(private httpClient: HttpClient) {
    console.log('Servicio Global.');
  }

  singInChecked(type, mail, pass): Observable<any> {
    if ('user' === type) {
      return this.httpClient.post(this.apiUrl + '/user/singin', { email: mail, password: pass });
    }
    if ('consultant' === type) {
      return this.httpClient.post(this.apiUrl + '/consultant/singin', { email: mail, password: pass });
    }
    if ('admin' === type) {
      return this.httpClient.post(this.apiUrl + '/user/admin_singin', { email: mail, password: pass, role: 'AD' });
    }
    return null;
  }

  create_user(user: User): Observable<any> {
    console.log(this.apiUrl);
    return this.httpClient.post(this.apiUrl + '/user', user);
  }
}
